import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import'./global.css'

const posts = [

 { 
    id: 1,
    author: {
      avatarUrl:'https://avatars.githubusercontent.com/u/109995781?v=4',
      name: 'Nome do usuário',
      role: 'Cargo do usuário'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' ,},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-10 19:45:03')
  },
  { 
    id: 2,
    author: {
      avatarUrl:'https://avatars.githubusercontent.com/u/50305227?v=4',
      name: 'Nome do usuário 2',
      role: 'Cargo do usuário'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' ,},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-15 09:00:00')
  },
];


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
          
        </main>
      </div>
    </div>

     
  )
}


