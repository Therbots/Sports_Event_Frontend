import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MessageBoard () {

    const [msgBoard, setMsgBoard] = useState();
    const [comments, setComments] = useState();
    const [replys, setReplys] = useState();

    useEffect (() => {
        getMsgBoards();
        getComments();
    }, [])

    async function getMsgBoards () {
        const access = localStorage.getItem('access');
        let response = await axios.get('http://127.0.0.1:8000/api/event_message_boards/', { headers: {Authorization: 'Bearer ' + access}})
        setMsgBoard(response.data)
    }

    async function getComments () {
        const access = localStorage.getItem('access');
        let response = await axios.get('http://127.0.0.1:8000/api/comments/', { headers: {Authorization: 'Bearer ' + access}})
        setComments(response.data)
    }

    async function getReplys () {
        const access = localStorage.getItem('access');
        let response = await axios.get('http://127.0.0.1:8000/api/replys/', { headers: {Authorization: 'Bearer ' + access}})
        setReplys(response.data)
    }


    return (
        <form>
            <input></input>
        </form>
    )
}

export default MessageBoard;