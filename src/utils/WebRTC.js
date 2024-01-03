//creating logic to connect two players using simple peer
import SimplePeer from 'simple-peer';

const peer = new SimplePeer({
    initiator: true,
    trickle: false
});

