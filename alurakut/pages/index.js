import styled from 'styled-components';
import Box from './src/components/Box';
import MainGrid from './src/components/MainGrid';
import { ProfileRelationsBoxWrapper } from './src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet } from './src/lib/AlurakutCommons'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const ProfileSideBar = (props) => {  
  return(
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: "8px" }} />
    </Box>
  ) 
};

export default function Home() {
  const githubUser = 'barbaraaliverti';
  const friends = ['gugacavalieri', 'barbaraaliverti', 'gugacavalieri', 'barbaraaliverti'];

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
      </div>

      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle" >Meus amigos ({friends.length})</h2>
          <ul>
            {friends.map((eachFriend) => {
              return(
                <li>
                  <a href={`/users/${eachFriend}`} key={eachFriend}>                  
                    <img src={`https://github.com/${eachFriend}.png`} />
                    <span>{eachFriend}</span>            
                  </a> 
                </li>
                               
              )
              })
            }
          </ul>
        </ProfileRelationsBoxWrapper>
        <Box>comunidades</Box>
      </div>      
      
    </MainGrid>
    </>
    )
};
