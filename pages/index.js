import { useState, useEffect } from 'react';
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

const ProfileRelationsBox = (props) => {
  return(
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle" >{props.title} ({props.items.length})</h2>
      <ul>
        {props.items.map((item, index) => {
          if (index <= 5) {
            return(
              <li key={item}>
                <a href={`/users/${item.login}`}>                  
                  <img src={`https://github.com/${item.login}.png`} />
                  <span>{item.login}</span>            
                </a> 
              </li>                                 
            )
          }              
        })
        }
      </ul>
    </ProfileRelationsBoxWrapper>
  )
};

export default function Home() {
  

  const githubUser = 'barbaraaliverti';
  const friends = ['gugacavalieri', 'barbaraaliverti'];
  const [communities, setCommunities] = useState([]);

  // 0 - criar fetch github
  
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    //método GET
    fetch('https://api.github.com/users/barbaraaliverti/followers')
    .then((res) => {
      
      if(res.ok) {
        return res.json();
      }
      throw new Error('Aconteceu um erro :(' + res.status);
    
    })
    .then((res) => setFollowers(res))
    .catch((err) => console.error(err));

    //API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      //https://www.datocms.com/docs/content-delivery-api/your-first-request
      headers: {
        'Authorization': 'b98ccc255f8cd0a164bb25b32e8730',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "query" : `query {
          allCommunities {
            id
            title
            creatorSlug
            imageUrl
            externalLink
          } 
        }`
      })
    })
    .then((res) => res.json())
    .then((resJSON) => {
      const communitiesFetchedFromDato = resJSON.data.allCommunities;
      console.log(communitiesFetchedFromDato);
      setCommunities(communitiesFetchedFromDato);
    })



  }, []); //colocando só [], executa uma vez; ou pode colocar a variável pra executar toda vez q for alterada
  // 1- box com map fetch dos followers do github

  return (
    <>
    <AlurakutMenu githubUser={githubUser} />
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

            const newCommunity = {
              title: communityData.get('title'),
              imageUrl: communityData.get('imageUrl'),
              externalLink: communityData.get('externalLink'),
              creatorSlug: githubUser,
            }

            fetch('/api/communities', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newCommunity)
            })
            .then(async (response) => {
              const data = await response.json();
              console.log(data.newCommunityAdded);
              const communityAdded = data.newCommunityAdded;
              setCommunities([...communities, communityAdded]);
            })            
          }                    
            
          }>
            <input 
              placeholder="Qual vai ser o nome da sua comunidade?" 
              name="title" 
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"
            />

            <input 
              placeholder="Insira uma URL para sua comunidade" 
              name="externalLink" 
              aria-label="Insira uma URL para a sua comunidade"
              type="text"
            />

            <input 
              placeholder="Insira uma URL para a capa" 
              name="imageUrl" 
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
            {friends.map((eachFriend, index) => {
              if (index <= 5) {
                return(
                  <li key={eachFriend}>
                    <a href={`/users/${eachFriend}`}>                  
                      <img src={`https://github.com/${eachFriend}.png`} />
                      <span>{eachFriend}</span>            
                    </a> 
                  </li>                                 
                )
              }              
              })
            }
          </ul>
        </ProfileRelationsBoxWrapper>

        <ProfileRelationsBox title="Seguidores" items={followers} />
        
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Comunidades ({communities.length})</h2>
          <ul>
            {communities.map(( item, index ) => {
              if (index <= 5) {
                return(
                  <li key={item.id}>
                    <a href={`${item.externalLink}`} target='_blank'>                  
                      <img src={item.imageUrl} />
                      <span>{item.title}</span>            
                    </a> 
                  </li>                               
                )
              }              
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>      
      
    </MainGrid>
    </>
    )
};
