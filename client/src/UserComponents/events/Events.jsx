import React from 'react'
import EventsCard from './EventsCard'
import { getevent } from "../../redux/Action/EventAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import './Events.scss'


function Events() {

  const { Loading, event, error } = useSelector((state) => state.Event_Select);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getevent())
  }, [])

  return (
    <div className="Containers">
      {Loading ?
        <h1> Loading</h1> :
        <div className="Movie-Containers">
          {event.map((even) => (<EventsCard key={even._id} event={even} />))}
        </div>}
    </div>
  )
}


export default Events

