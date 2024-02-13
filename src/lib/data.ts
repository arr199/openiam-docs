interface Page  {
    name : string 
    items : Item[]
    label : string
   
   }
   
   interface Item {
     name : string 
     link : string
   }
   
   export const pages : Page[] = [
    // INTRODUCTION 
    { 
       name : "introduction",
       label : "Introduction" ,
       items : [
         { name : "What is openiam" ,  link : "/" 
         }
       ] ,  
      },
    //   GETTING STARTED
      { 
       name : "getting-started" ,
       label : "Getting Started",
       items : [
         { name : "Accessing openiam" ,  link : "/getting-started/accessing-openiam" },
         { name : "Creating an User" ,  link : "/getting-started/creating-a-user" },
         { name : "Modifying an user" ,  link : "/getting-started/modifying-user" },
         { name : "Deleting an User" ,  link : "/getting-started/delete-user" },
         { name : "Removing roles" ,  link : "/getting-started/removing-roles" },
       ] ,  
      },
    
      //   COMMON USER ISSUES
      { 
       name : "common-user-issues" ,
       label : "Common User Issues" ,
       items : [
         { name : "Add user" ,  link : "installation" } ,
         { name : "Delete user" ,  link : "installation" },
         { name : "Update user" ,  link : "installation" }
       ] ,  
      },
   
   ]