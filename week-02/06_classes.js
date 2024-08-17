class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
        // const area2 = () => {
        //     return this.width * this.height;
        // }
        // console.log('area2');
        // console.log(area2());
          return area;
    }
    
    paint() {
             return (`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4, 'red');
//  console.log(typeof rect);
//  console.log(rect.width);
//  console.log(rect.height);
//  console.log(rect.width * rect.height);
//  console.log(rect.color);

 const area = rect.area();
 const color = rect.paint();
 console.log(rect);
 console.log(area);
 console.log(color);

 const rect2 = new Rectangle(20, 40, 'green');
 const area2 = rect2.area();

 const date = new Date();
 console.log(date);
 console.log(date.getDay());
 console.log(date.getMonth());
 console.log(date.getFullYear());

 const map = new Map();
 map.set('name', 'Alice');
 map.set('age', 30);
 console.log(map.get('name'));
 console.log(map.get('age'));