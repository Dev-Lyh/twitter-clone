import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Emily Carvalho Felicio</h1>
        <h2>@dev_lyh</h2>

        <p>
          Developer at <a href="https://www.linkedin.com/in/emily-felicio-35371820a/">@MySelf</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Curitiba, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 03 de janeiro de 2005 
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>318</strong>
          </span>
          <span>
            <strong>831</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />

    </Container>
  );
}

export default ProfilePage;