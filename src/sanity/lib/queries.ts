import {groq} from "next-sanity";


   export const allProduct =groq `*[_type == "product" ]`