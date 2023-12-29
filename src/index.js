import { readdirSync, existsSync, mkdirSync } from "fs";
import { createPosts } from "./templates/post.js";
import { marked } from "marked";
import fm from "front-matter";

if (!existsSync("public")) mkdirSync("public");

export function parseMarkdown(postPath) {
    const data = readFileSync(`posts/${postPath}.md`);
    let contents = fm(data + "");
    contents.body = marked.parse(contents.body);
    contents.path = postPath;

    return contents;
}

const posts = readdirSync("posts")
    .map((post) => {
        return post.slice(0, -3);
    })
    .map((post) => {
        return parseMarkdown(post);
    });

createPosts(posts);
