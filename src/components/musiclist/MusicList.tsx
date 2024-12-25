import React, { useState } from 'react';

type Song = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  imageUrl: string;
};

type Props = {};

const MusicList = (props: Props) => {
  // Mảng các bài hát mẫu
  const [songs] = useState<Song[]>([
    {
      id: 1,
      title: 'Tên Bài Hát 1',
      artist: 'Nghệ Sĩ 1',
      genre: 'pop',
      imageUrl: 'images/song1.jpg',
    },
    {
      id: 2,
      title: 'Tên Bài Hát 2',
      artist: 'Nghệ Sĩ 2',
      genre: 'rock',
      imageUrl: 'images/song2.jpg',
    },
    {
      id: 3,
      title: 'Tên Bài Hát 3',
      artist: 'Nghệ Sĩ 3',
      genre: 'ballad',
      imageUrl: 'images/song3.jpg',
    },
    {
      id: 4,
      title: 'Tên Bài Hát 4',
      artist: 'Nghệ Sĩ 4',
      genre: 'edm',
      imageUrl: 'images/song4.jpg',
    },
  ]);

  return (
    <main className="super_container">
      {/* Danh sách bài hát hot */}
      <section className="hot-songs">
        <h2 className="section-title">Bài Hát Hot</h2>
        {/* Tìm kiếm bài hát */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm bài hát..."
            id="song-search"
            className="search-input"
          />
        </div>
        {/* Lọc thể loại */}
        <div className="filter-genres">
          <span>Lọc theo thể loại:</span>
          <select id="genre-filter" className="genre-select">
            <option value="all">Tất cả</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="ballad">Ballad</option>
            <option value="edm">EDM</option>
          </select>
        </div>
        <ul className="song-list">
          {songs.map((song) => (
            <li key={song.id} className="song-item">
              <img src={song.imageUrl} alt={song.title} className="song-image" />
              <div className="info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-artist">{song.artist}</p>
              </div>
            </li>
          ))}
        </ul>
        {/* Phân trang */}
        <div className="pagination">
          <button className="prev-btn">Trước</button>
          <span className="page-number">Trang 1</span>
          <button className="next-btn">Sau</button>
        </div>
      </section>

      {/* Thể loại nhạc */}
      <section className="genres">
        <h2 className="section-title">Thể Loại</h2>
        <div className="genre-list">
          <div className="genre-item">Pop</div>
          <div className="genre-item">Rock</div>
          <div className="genre-item">Ballad</div>
          <div className="genre-item">EDM</div>
        </div>
      </section>
    </main>
  );
};

export default MusicList;
