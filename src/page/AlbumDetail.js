import React, { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import MagnifierIcon from '../img/Bottombar/Magnifier.svg';
import DeleteIcon from '../img/Bottombar/delete.png';

const AlbumDetail = () => {
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

  const handleDeleteImage = (indexToRemove) => {
    setAlbums(albums.filter((_, index) => index !== indexToRemove));
  };

  const filteredAlbums = albums.filter((album) =>
    album.date.includes(searchTerm)
  );

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <SearchBarWrapper>
          <SearchInputWrapper>
            <SearchInput
              type='text'
              placeholder='날짜로 검색 (예: 2024.10.05)'
              value={searchTerm}
              onChange={handleSearch}
            />
            <Magnifier src={MagnifierIcon} alt='Search' />
          </SearchInputWrapper>
        </SearchBarWrapper>

        <AlbumLabel>내 앨범</AlbumLabel>

        <GalleryWrapper>
          <Gallery>
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

            {filteredAlbums.map((album, index) => (
              <ImageContainer key={index}>
                <ImageLabel>{album.date}</ImageLabel>
                <ImagePreview src={album.url} alt={`img-${index}`} />
                <DeleteButton onClick={() => handleDeleteImage(index)}>
                  <DeleteIconImage src={DeleteIcon} alt='Delete' />
                </DeleteButton>
              </ImageContainer>
            ))}
          </Gallery>
        </GalleryWrapper>
      </Container>
    </ThemeProvider>
  );
};

export default AlbumDetail;

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

const SearchBarWrapper = styled.div`
  width: 90%;
  margin: 30px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.green1};
  border-radius: 5px;
  padding: 10px;
`;

const SearchInput = styled.input`
  width: 90%;
  font-size: 16px;
  border: none;
  outline: none;
`;

const Magnifier = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  cursor: pointer;
`;

const AlbumLabel = styled.h2`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
`;

const GalleryWrapper = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: auto;
  padding-right: 10px;
`;

const Gallery = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
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
  width: 100%;
  max-width: 250px;
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

const DeleteButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
`;

const DeleteIconImage = styled.img`
  width: 24px;
  height: 24px;
`;
