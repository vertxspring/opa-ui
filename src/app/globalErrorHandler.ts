import { ErrorHandler } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http'
export class GlobalErrorhandler implements ErrorHandler {
    handleError(error) {
      
     if(error instanceof HttpErrorResponse)
{
if(error.status == 404){
  alert("Resource not found: 404");
}
else{
alert("Error fetching required data");
}
}

     else{
      
      alert("App Error!");
     }
     console.log(error);
    }
  }