import axios from "axios";

export default axios.create({
     baseURL:'https://api.rawg.io/api',
     params: {
        key:'904cffd733b64e3ead2d0864c406e82a'
    }
})