/** @type {import('next').NextConfig} */
const nextConfig = {
    //we have to written the domain of images which we are using in the entire project
    // images:{
    //     domains:["unsplash.com","pixabay.com"]
    // }

    //this is use when we want to redirect from one route to another
    //  redirects : async()=>{
    //     return [
    //         {
    //             source:'/users',
    //             destination:'/',
    //             permanent:false
    //         }
    //     ]
    //  }
};

export default nextConfig;
