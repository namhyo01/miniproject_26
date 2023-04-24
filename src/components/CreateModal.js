import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import Bootstrap from "./test";
import { useCallback, useState, useEffect } from "react";
import PlaceList from "./PlaceList";
const { kakao } = window;

function CreateModal({ meets, setMeets, openModal, setOpenModal }) {

  const handleChange = item => {
    console.log('asdas')
    if (item) {
      alert(`You are selected ${item.name || item}`);
    } else {
      alert(`Selection cleared`);
    }
  };
  
  const items = [];

  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  const [meeting, setMeeting] = useState({ place: "", time: "", chat: "" });
  const [place, setPlace] = useState({});
  const [searchPlaceList, setSearchPlaceList] = useState([]);

  const findPlace = useCallback(() => {
    const ps = new kakao.maps.services.Places();

    const callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setSearchPlaceList(result);
      }
    };

    ps.keywordSearch(meeting.place, callback);
  }, [meeting.place]);

  const inputChangeHandler = useCallback((e) => {
    const { name, value } = e.target;

    setMeeting((meeting) => {
      return {
        ...meeting,
        [name]: value,
      };
    });
  }, []);

  // const inputOnClickHander = e =>{
  //   if (e.key === 'Enter'){
  //     findPlace();
  //   }
  // };

  const clickPlace = useCallback((place) => {
    setSearchPlaceList([]);
    setPlace(place);
    setMeeting((meeting) => {
      return {
        ...meeting,
        place: place.place_name,
      };
    });
  }, []);

  const createHandler = useCallback(() => {
    setMeets((meets) =>
      meets.concat({ place: place, date: meeting.time, link: meeting.chat })
    );
    setOpenModal(false);
  }, [setMeets, meeting.time, meeting.chat, place, setOpenModal]);

  useEffect(() => {
    console.log(place);
  }, [place]);

  return (
    <Modal
      show={openModal}
      onHide={closeModal}
      className="modal show"
      style={{ display: "block", position: "absoulte" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>모임 생성</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <Bootstrap
           label="장소"
           items={items}
           onClick={clickPlace}
          //  onChange={handleChange}
          >
           
          </Bootstrap>

          {/* <div>
            <label htmlFor="place">장소</label>
            <br />
            <input
              name="place"
              type="text"
              value={meeting.place}
              onChange={inputChangeHandler}
              onKeyDown={inputOnClickHander}
            />
            <Button variant="primary" onClick={findPlace}>
              찾기
            </Button>
          </div> */}
          {/* {searchPlaceList.length > 0 &&
            searchPlaceList.map((place) => (
              <PlaceList key={place.id} place={place} onClick={clickPlace} />
            ))} */}
          <div>
            <label htmlFor="time">시간</label>
            <br />
            <input
              name="time"
              className="form-control w-50"
              type="datetime-local"
              value={meeting.time}
              onChange={inputChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="chat">오픈채팅 링크</label>
            <br />
            <input
              name="chat"
              type="text"
              className="form-control"
              value={meeting.chat}
              onChange={inputChangeHandler}
            />
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          취소
        </Button>
        <Button variant="primary" onClick={createHandler}>
          생성
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateModal;
