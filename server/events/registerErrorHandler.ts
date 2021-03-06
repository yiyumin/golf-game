import { ErrorType } from '@yiyumin/golf-game-library/types';
import { GolfSocket } from '../types';

const registerErrorHandler = (socket: GolfSocket) => {
  const onError = (error: Error) => {
    socket.emit('error', error.message as ErrorType);
  };

  socket.on('error', onError);
};

export default registerErrorHandler;
