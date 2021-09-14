import React from 'react';
import us from './Users.module.css';
import foto from '../../img/images.jpg';
import { NavLink } from 'react-router-dom';
import Paginator from './Paginator';


const Users = (props) => {
    return (<div>
        <Paginator
            tottalUser={props.tottalUser}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            newPageChanged={props.newPageChanged} />

        <div>
            {props.users.map(u => <div key={u.id}>
                <div className={us.container}>
                    <div className={us.block_left}>
                        <div >
                            <NavLink to={'Profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small :
                                    foto} alt="" className={us.foto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}
                                > Unfollow </button>
                                : <button disabled={props.followProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id)
                                    }
                                    }> follow</button>
                            }
                        </div>
                    </div>
                    <div className={us.block_rigth}>
                        <div className={us.fullname}>{u.followed} </div>
                        <div className={us.status}>{u.status} </div>
                        <div className={us.location}>{u.name} </div>
                        <div className={us.location_country}>{"u.location.country"} </div>

                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
    )
}

export default Users;