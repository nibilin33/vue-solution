export const getImage = (source)=>{
    let img = new Image();
    img.src = source;
    return new Promise((resolve,reject)=>{
        img.onload = ()=>{
            resolve(img);
        }
    });
}