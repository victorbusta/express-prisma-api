import { Request, Response } from "express";

export function checkRequirement(requirements: String[], req: Request, res: Response): boolean {
  const keys: String[] = Object.keys(req.body);
  var fields = ''; 

  requirements.forEach((requirement, key) => {
    if (!keys.includes(requirement)) {
      fields += `${requirement}${key !== requirements.length - 1 ? ', ' : ''}`;
    }
  })

  if (fields !== '') {
    res.statusCode = 400;
    res.statusMessage = `missing field(s) : ${fields}`;
    res.end();
    
    return false;
  }

  return true;
}