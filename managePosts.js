const posts = [
    {username:"Batuhan",text:"I'm learning Node.js"},
    {username:"Sebastian",text:"I love watermelon"},
    {username:"Oscar",text:"I love nuts"},
]

function addPost(post){
    return new Promise((resolve, reject)=>{
        
        if(post){
            posts.push(post);
            resolve("Post added successfully");
        }
        
        reject("Error occurred while adding post")
    })
}

function showPosts(){
    return new Promise((resolve, reject)=>{
        if(posts){
            posts.map((post)=>console.log(`User: ${post.username} Text: ${post.text}`))
            resolve("Posts showed successfully");
        }

        reject("Error occurred while showing posts")
    })
}

const examplePost = {username:"Elif",text:"I watch TV"}

async function processPosts(){
    console.log("Processing posts...");
    try{
        console.log("\nShow Posts - 1");
        await showPosts();
        await addPost(examplePost);
        console.log("\nShow Posts - 2");
        await showPosts();
        console.log("Processing posts done successfully");
    }
    catch(err){
        console.log("Error while processing posts");
    }
}

processPosts()