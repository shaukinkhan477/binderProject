import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    {
      id: 1,
      courseImg: "./../assets/image1.jpg",
      courseName: "Advanced Machine Learning",
      author: "Alex Johnson",
      actualPrice: "₹1199",
      discountPercentage: "15%",
      discountPrice: "₹1200",
      tags: ["Machine Learning", "Python"]

  },
  {
    id: 2,
    courseImg: "./../assets/img2.png",
    courseName: "JavaScript Frameworks Masterclass",
    author: "Emily White",
    actualPrice: "₹899",
    discountPercentage: "20%",
    discountPrice: "₹599",
    tags: ["JavaScript", "React", "Vue"]
  },
  {
    id: 3,
    courseImg: "./../assets/img3.jpg",
    courseName: "Full Stack Development with Django",
    author: "Chris Turner",
    actualPrice: "₹1499",
    discountPercentage: "10%",
    discountPrice: "₹1200",
    tags: ["Python", "Django", "JavaScript"]
  },
  {
    id: 4,
    courseImg: "./../assets/img4.jpg",
    courseName: "Cybersecurity Essentials",
    author: "Sophia Davis",
    actualPrice: "₹1299",
    discountPercentage: "25%",
    discountPrice: "₹1200",
    tags: ["Cybersecurity", "Network Security"]
  },
  {
    id: 5,
    courseImg: "./../assets/img5.png",
    courseName: "Mobile App UX Design",
    author: "Daniel Smith",
    actualPrice: "₹999",
    discountPercentage: "18%",
    discountPrice: "₹699",
    tags: ["UX Design", "Mobile App Development"]
  },
  {
    id: 6,
    courseImg: "./../assets/img6.jpg",
  courseName: "Node.js for Beginners",
  author: "Ava Williams",
  actualPrice: "₹699",
  discountPercentage:"18%",
  discountPrice: "₹450",
  tags: ["Node.js", "JavaScript"]
  },
  {
    id: 7,
    courseImg: "./../assets/img7.jpeg",
    courseName: "Artificial Intelligence in Business",
    author: "Noah Turner",
    actualPrice: "₹1599",
    discountPercentage: "12%",
    discountPrice: "₹1200",
    tags: ["Artificial Intelligence", "Business"]
  },
  {
    id: 8,
    courseImg: "./../assets/img8.webp",
    courseName: "Swift Programming for iOS",
    author: "Emma Johnson",
    actualPrice: "₹1099",
    discountPercentage: "17%",
    discountPrice: "₹999",
    tags: ["iOS", "Swift"]
  },
  {
    id: 9,
    courseImg: "./../assets/img9.png",
    courseName: "Responsive Web Design Principles",
    author: "Liam White",
    actualPrice: "₹799",
    discountPercentage: "21%",
    discountPrice: "₹450",
    tags: ["Web Design", "HTML", "CSS"]
  },
  {
    id: 10,
    courseImg: "./../assets/img10.png",
    courseName: "Java Fundamentals",
    author: "Olivia Turner",
    actualPrice: "₹899",
    discountPercentage: "0",
    discountPrice: "₹899",
    tags: ["Java"]
  },
  {
    id: 11,
    courseImg: "./../assets/img11.jpg",
    courseName: "Game Development with Unity",
    author: "Lucas Davis",
    actualPrice: "₹1399",
    discountPercentage: "14%",
    discountPrice: "₹1200",
    tags: ["Game Development", "Unity"]
  },
  {
    id: 12,
    courseImg: "./../assets/img12.png",
  courseName: "Python for Data Science",
  author: "Aria Smith",
  actualPrice: "₹1199",
  discountPercentage: "0",
  discountPrice: "₹1199",
  tag: ["Python", "Data Science"]
  },
  {
    id: 13,
    courseImg: "./../assets/img13.png",
    courseName: "Frontend Development Bootcamp",
    author: "Mia Johnson",
    actualPrice: "₹999",
    discountPercentage: "18%",
    discountPrice: "₹600",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 14,
    courseImg: "./../assets/img14.jpg",
    courseName: "C# Programming Mastery",
    author: "Jackson White",
    actualPrice: "₹1099",
    discountPercentage: "0",
    discountPrice: "₹1099",
    tags: ["C#"]
  },
  {
    id: 15,
    courseImg: "./../assets/img15.png",
    courseName: "Angular Framework Deep Dive",
    author: "Ava Turner",
    actualPrice: "₹1299",
    discountPercentage: "15%",
    discountPrice: "₹1100",
    tags: ["Angular"]
  },
  {
    id: 16,
    courseImg: "./../assets/img16.webp",
    courseName: "Data Visualization with D3.js",
    author: "Ethan Davis",
    actualPrice: "₹899",
    discountPercentage: "0",
    discountPrice: "₹899",
    tags: ["Data Visualization", "D3.js"]
  },
  {
    id: 17,
    courseImg: "./../assets/img17.jpg",
    courseName: "Android App Development Basics",
    author: "Isabella Smith",
    actualPrice: "₹799",
    discountPercentag: "0",
    discountPrice: "₹799",
    tags: ["Android", "Mobile App Development"]
  },
  {
    id: 18,
    courseImg: "./../assets/img18.png",
    courseName: "Vue.js for Frontend Development",
    author: "Logan Johnson",
    actualPrice: "₹999",
    discountPercentage: "18%",
    discountPrice: "₹700",
    tags: ["Vue.js", "JavaScript"]
  },
  {
    id: 19,
    courseImg: "./../assets/img19.jpeg",
    courseName: "Cloud Computing Fundamentals",
    author: "Sophie Turner",
    actualPrice: "₹1199",
    discountPercentage: "16%",
    discountPrice: "₹900",
    tags: ["Cloud Computing"]
  }
  ];

  getProducts(): Observable<any[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<any> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}
