import { useState } from 'react';
import styled from 'styled-components';
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const ProfileSideBar = (props) => {  
  return(
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: "8px" }} />
      <hr />
      <p>
        <a className="boxLink" href={`http://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>  
      </p>      
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  ) 
};

export default function Home() {
  

  const githubUser = 'barbaraaliverti';
  const friends = ['gugacavalieri', 'barbaraaliverti'];
  const [communities, setCommunities] = useState([{
    id: new Date().toISOString(),
    title: 'Aceite essa manga',
    image: 'https://i.pinimg.com/originals/0c/d4/8f/0cd48f58e29251826eb366b39452cfa7.jpg'
  }]);

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={githubUser} />
      </div>

      <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">Bem vindo(a)</h1>
          <OrkutNostalgicIconSet />
        </Box>

        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            const communityData = new FormData(e.target);
            console.log(communityData.get('title'), communityData.get('image'));

            const newCommunity = {
              title: communityData.get('title'),
              image: communityData.get('image')
            }

            setCommunities([...communities, newCommunity])
          }                    
            
          }>
            <input 
              placeholder="Qual vai ser o nome da sua comunidade?" 
              name="title" 
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"
            />

            <input 
              placeholder="Insira uma URL para a capa" 
              name="image" 
              aria-label="Insira uma URL para a capa"
              type="text"
            />

            <button>Criar comunidade</button>
          </form>
        </Box>
      </div>

      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle" >Meus amigos ({friends.length})</h2>
          <ul>
            {friends.map((eachFriend) => {
              return(
                <li key={eachFriend}>
                  <a href={`/users/${eachFriend}`}>                  
                    <img src={`https://github.com/${eachFriend}.png`} />
                    <span>{eachFriend}</span>            
                  </a> 
                </li>
                               
              )
              })
            }
          </ul>
        </ProfileRelationsBoxWrapper>
        
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Comunidades</h2>
          <ul>
            {communities.map(( eachComm ) => {
              return(
                <li key={eachComm.id}>
                  <a href={`/users/${eachComm.title}`}>                  
                    <img src={eachComm.image} />
                    <span>{eachComm.title}</span>            
                  </a> 
                </li>                               
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>      
      
    </MainGrid>
    </>
    )
};
