import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { themes } from '../../constants/colors';
import MessageContext from './Context';
import ThreadDetails from '../ThreadDetails';
import I18n from '../../i18n';

export interface IMessageThread {
	msg: string;
	tcount: number;
	theme: string;
	tlm: string;
	isThreadRoom: boolean;
	id: string;
}

const Thread = React.memo(({ msg, tcount, tlm, isThreadRoom, theme, id }: IMessageThread) => {
	if (!tlm || isThreadRoom || tcount === 0) {
		return null;
	}

	const {
		threadBadgeColor, toggleFollowThread, user, replies
	} = useContext(MessageContext);
	return (
		<View style={styles.buttonContainer}>
			<View
				style={[styles.button, { backgroundColor: themes[theme].tintColor }]}
				testID={`message-thread-button-${ msg }`}
			>
				<Text style={[styles.buttonText, { color: themes[theme].buttonText }]}>{I18n.t('Reply')}</Text>
			</View>
			<ThreadDetails
				item={{
					tcount,
					replies,
					tlm,
					id
				}}
				user={user}
				badgeColor={threadBadgeColor}
				toggleFollowThread={toggleFollowThread}
				style={styles.threadDetails}
			/>
		</View>
	);
}, (prevProps, nextProps) => {
	if (prevProps.tcount !== nextProps.tcount) {
		return false;
	}
	if (prevProps.theme !== nextProps.theme) {
		return false;
	}
	return true;
});

Thread.displayName = 'MessageThread';

export default Thread;
