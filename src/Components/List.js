import React from 'react'
import { ListItems } from './ListItems'

export const List = (props) => 
   (
    <div className='container text-center py-5'>
        <h1>My List</h1>
        {props.lists.length === 0 ? <h3>Everybody is Gone Happy Now ??</h3>:
        props.lists.map((list)=> <ListItems block={list} key={list.sno}  OnDelete={props.OnDelete} OnHover={() => props.OnHover(list.sno)} />)
        }
        
    </div>
  );

