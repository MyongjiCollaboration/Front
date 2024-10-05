import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Axios } from '../api/Axios';

const AlbumList = () => {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const fetchAlbumList = async () => {
    try {
      const response = await Axios.get('/api/album/list');
      setAlbums(response.data);
    } catch (error) {
      console.error('앨범 리스트를 불러오는 데 실패했습니다.', error);
    }
  };

  // 컴포넌트 마운트 시 앨범 리스트 불러오기
  useEffect(() => {
    fetchAlbumList();
  }, []);

  const handleAlbumClick = (id) => {
    navigate(`/albumDetail/${id}`); // 앨범 클릭 시 앨범 상세 페이지로 이동
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
        {albums.length > 0 ? (
          albums.map((album) => (
            <AlbumItem
              key={album.id}
              onClick={() => handleAlbumClick(album.id)}
            >
              {album.name}
            </AlbumItem>
          ))
        ) : (
          <p>앨범이 없습니다.</p>
        )}

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
  border: 1px solid ${({ theme }) => theme.colors.black};
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
