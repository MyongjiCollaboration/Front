import React, { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const fileInputRef = useRef(null);

  const handleAddImage = (event) => {
    const files = Array.from(event.target.files);
    const newAlbums = files.map((file) => ({
      url: URL.createObjectURL(file),
      date: new Date().toLocaleDateString(),
    }));
    setAlbums((prevAlbums) => [...newAlbums, ...prevAlbums]);
  };

  const handleAlbumBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAlbums = albums.filter((album) =>
    album.date.includes(searchTerm)
  );

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <SearchBarWrapper>
          <SearchInput
            type='text'
            placeholder='날짜로 검색 (예: 2024.10.05)'
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchBarWrapper>

        <Gallery>
          {filteredAlbums.map((album, index) => (
            <ImageContainer key={index}>
              <ImageLabel>{album.date}</ImageLabel> {/* 날짜 표시 */}
              <ImagePreview src={album.url} alt={`img-${index}`} />
            </ImageContainer>
          ))}

          <AlbumBox onClick={handleAlbumBoxClick}>
            <AddAlbumIcon>+</AddAlbumIcon>
            <AddAlbumText>앨범을 추가해주세요</AddAlbumText>
            <input
              type='file'
              multiple
              accept='image/*'
              onChange={handleAddImage}
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
          </AlbumBox>
        </Gallery>
      </Container>
    </ThemeProvider>
  );
};

export default Album;

// Styled Components
const Container = styled.div`
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

const SearchBarWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
`;

const AlbumBox = styled.div`
  width: 250px;
  height: 250px;
  border: 2px dashed ${({ theme }) => theme.colors.gray};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.green5};
  }
`;

const AddAlbumIcon = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 10px;
`;

const AddAlbumText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.blue2};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
`;

const ImageLabel = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  padding: 3px 6px;
  border-radius: 5px;
  z-index: 1;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
