/** @type {import('next').NextConfig} */
const nextConfig = {

    images : {
        remotePatterns : [
            {
                hostname : "abena-openiam-docs.vercel.app",
                pathname : "/**" ,
                port : "" ,
                protocol : "https",
            },
            {
                hostname : "localhost",
                pathname : "**" ,
                port : "3400" ,
                protocol : "http",
            },
            { 
                hostname : "digital-marketplace-ghencuyfzq-nw.a.run.app",
                pathname : "**" ,
                port : "" ,
                protocol : "https",
            },
        ]
    }
}

export default nextConfig