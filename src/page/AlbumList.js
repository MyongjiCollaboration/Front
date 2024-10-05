import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AlbumList = () => {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState([
    { id: 1, title: '여름 휴가' },
    { id: 2, title: '가족 모임' },
    { id: 3, title: '친구들과의 추억' },
    { id: 4, title: '새해 첫날' },
  ]);

  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAlbumClick = (id) => {
    navigate(`/albumDetail/${id}`);
  };

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleInputChange = (e) => {
    setNewAlbumTitle(e.target.value);
  };

  const handleAddAlbum = (e) => {
    e.preventDefault();
    if (newAlbumTitle.trim()) {
      const newAlbum = {
        id: albums.length + 1,
        title: newAlbumTitle,
      };
      setAlbums([...albums, newAlbum]);
      setNewAlbumTitle('');
      setIsAdding(false);
    }
  };

  return (
    <Container>
      <Title>내 앨범 목록</Title>
      <AlbumListWrapper>
        {albums.map((album) => (
          <AlbumItem key={album.id} onClick={() => handleAlbumClick(album.id)}>
            {album.title}
          </AlbumItem>
        ))}

        {isAdding ? (
          <AddAlbumForm onSubmit={handleAddAlbum}>
            <AlbumInput
              type='text'
              value={newAlbumTitle}
              onChange={handleInputChange}
              placeholder='새 앨범 제목을 입력하세요'
            />
            <AddButton type='submit'>추가</AddButton>
          </AddAlbumForm>
        ) : (
          <AddAlbumBox onClick={handleAddClick}>+</AddAlbumBox>
        )}
      </AlbumListWrapper>
    </Container>
  );
};

export default AlbumList;

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.Black};
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

const AlbumListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const AlbumItem = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 15px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border: 1px solid ${({ theme }) => theme.colors.green1};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green2};
  }
`;

const AddAlbumBox = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 15px;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border: 1px solid ${({ theme }) => theme.colors.green1};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green2};
  }
`;

const AddAlbumForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 500px;
`;

const AlbumInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.green1};
  border-radius: 8px 0 0 8px;
  outline: none;
`;

const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green1};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green2};
  }
`;
