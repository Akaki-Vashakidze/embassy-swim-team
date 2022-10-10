import { Injectable } from '@angular/core';
import { swimmersInfo } from './swimmers-info.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  swimmers: swimmersInfo[] = [
    {
     name:'Liam',
     lastName: 'Larson',
     dateOfBirth: '01.03.2016',
     bio: 'Started swimming at the age of 6',
     img:'https://d1s9j44aio5gjs.cloudfront.net/2017/09/Swim-England-image-for-Myth.jpg',
     rank:''
  },
  {
    name:'Dylan',
    lastName: '',
    dateOfBirth: '01.03.2016',
    bio: 'Likes Butterfly stroke',
    img:'https://www.yourswimlog.com/wp-content/uploads/2018/10/Best-Swimming-Goggles-for-Kids.jpg',
    rank:''
 },
 {
  name:'Jonah',
  lastName: '',
  dateOfBirth: '01.03.2016',
  bio: 'he is he fastest one',
  img:'http://www.chicagobluedolphins.com/wp-content/uploads/2017/06/swim-team-kids-chicago.jpg',
  rank:''
},
{
  name:'Spenser',
  lastName: 'Larson',
  dateOfBirth: '01.03.2016',
  bio: 'Started swimming at the age of 3',
  img:'https://swimmirror.com/blog/wp-content/uploads/2018/04/Blog_Best-Swim-Parent-Ever-edit-940x600.jpg',
  rank:''
},
{
  name:'August',
  lastName: 'Larson',
  dateOfBirth: '01.03.2016',
  bio: 'wants to swim 200 Fly',
  img:'https://keepingscore.blogs.time.com/wp-content/uploads/sites/6/2012/04/kid-swimmer.jpg?w=600',
  rank:''
},
]

}
