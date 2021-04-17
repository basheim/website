import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

function traverseDir(dir: string, paths: string[]) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
       traverseDir(fullPath, paths);
     } else {
       paths.push(fullPath);
     }  
  });
}

function searchDir(dir: string, id: string): string {
  let filePaths: string[] = [];
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      filePaths.push(searchDir(fullPath, id));
     } 
     if (fullPath.includes(`${id}.md`)) {
      filePaths.push(fullPath);
     }
  });
  for (const filePath of filePaths) {
    if (filePath) {
      return filePath;
    }
  }
  return '';
}

export function getSortedPostsData() {
  // Get file names under /posts
  const filePaths: string[] = [];
  traverseDir(postsDirectory, filePaths);
  const allPostsData = filePaths.map(filePath => {
    // Remove ".md" from file name to get id
    const brokenPath = filePath.split('/');
    const id = brokenPath[brokenPath.length - 1].replace(/\.md$/, '');

    const fileContents = fs.readFileSync(filePath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  })
  
}

export function getPostDataByTag(postData: any) {
  const tagMap: any = {};
  for (const post of postData) {
    const tags = post.tags.split(',');
    for (const tag of tags) {
      if (!tagMap[tag]) {
        tagMap[tag] = [];
      } 
      tagMap[tag].push(post);
    }
  }
  return tagMap;
}

export function getAllPostIds() {
    // Get file names under /posts
  const filePaths: string[] = [];
  traverseDir(postsDirectory, filePaths);
    return filePaths.map(filePath => {
      // Remove ".md" from file name to get id
    const brokenPath = filePath.split('/');
    const id = brokenPath[brokenPath.length - 1].replace(/\.md$/, '');
      return {
        params: {
          id
        }
      }
    });
  }

  export async function getPostData(id: string) {
    const fullPath = searchDir(postsDirectory, id);
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }