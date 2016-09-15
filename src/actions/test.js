export const TEST_OK = 'TEST_OK';
export const TEST_ERROR = 'TEST_ERROR';

const testSuccess = () => {
  return {
    type: TEST_OK
  }
}

const testFailed = () => {
  return {
    type: TEST_ERROR
  }
}

export const testClick = ( err ) => {
	if(err) {
		return testFailed();
	}
	else{
		return testSuccess();
	}
}