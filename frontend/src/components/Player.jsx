import React, {useState, useEffect} from 'react';

const Player = ({ isInitiator, onOffer, onAnswer}) => {
    const [localConnection] = useState(new RTCPeerConnection());
    const [localDescription, setLocalDescription] = useState(null);

    useEffect(() => {
        const createOffer = async () => {
            const offer = await localConnection.createOffer();
            await localConnection.setLocalDescription(offer);

            setLocalDescription(localConnection.localDescription);
            onOffer(offer);
        }

    const createAnswer = async () => {
        await localConnection.setRemoteDescription(localDescription);
        const answer = await localConnection.createAnswer();
        await localConnection.setLocalDescription(answer);
        onAnswer(answer);
    };

    const handleICECandidate = (event) => {
        if (event.candidate) {
            sendICECandidateToOtherPeer(event.candidate);
        }
    };

    localConnection.addEventListener('icecandidate', handleICECandidate);

    if (isInitiator) {
        createOffer();
    } else {
        const offerFromOtherPeer = getOfferFromOtherPeer();
        await localConnection.setRemoteDescription(offerFromOtherPeer);
        createAnswer();
    }

    return () => {
        localConnection.removeEventListener('icecandidate', handleICECandidate);
    };
}, [isInitiator, localConnection, localDescription, onOffer, onAnswer]);

return (
    <>
        <div>
            Player Component here
        </div>
    </>
)

};

export default Player;