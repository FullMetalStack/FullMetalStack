import React from 'react';

import ControllerIcon from '../../assets/icons/ControllerIcon';
import HeartFullIcon from '../../assets/icons/HeartFullIcon';
import LiveIcon from '../../assets/icons/LiveIcon';
import PeopleIcon from '../../assets/icons/PeopleIcon';
import SubscribeFullIcon from '../../assets/icons/SubscribeFullIcon';
import WatcherIcon from '../../assets/icons/WatcherIcon';

import {useLayoutController} from '../../context/LayoutController';
import {ChatIcon} from '../../assets/icons/ChatIcon';

export const GamingHeader = () => {
	const {chatVisible, toggleFullScreen} = useLayoutController();

	const title = 'Make suggestions for what the streamer should do next!';

	return (
			<header>
				<div className='stream-details'>
					<LiveIcon/>
					<div className='info'>
						<h2 title={title}>{title}</h2>
						<div className='game-details'>
							<div>
								<ControllerIcon/>
								<p>Audience Control</p>
							</div>
							<div>
								<PeopleIcon/>
								<p>Nimz</p>
							</div>
						</div>
					</div>
				</div>
				<div style={{flexGrow: 1, textAlign: 'center'}}>
					<h1 style={{color: 'white'}}>REALITY CONTROL</h1>
				</div>
				<div className='stream-involvement'>
				<div className='stream-involvement__stat'>
						<p style={{fontSize: 40}}>£285</p>
					</div>
					<div className='stream-involvement__stat'>
						<WatcherIcon/>
						<p>458K</p>
					</div>
					<div className='stream-involvement__stat'>
						<HeartFullIcon/>
						<p>1.2K</p>
					</div>
					<div className='stream-involvement__stat'>
						<SubscribeFullIcon/>
						<p>250</p>
					</div>
				</div>
				<div className={`chat-opener ${['chat-visible', ''].includes(chatVisible) ? 'hide' : ''}`}>
					<button onClick={toggleFullScreen} title='Open Chat'><ChatIcon/></button>
				</div>
			</header>

	);
};
