// import { useState, useEffect } from "react";

// export const useFetchLocation = () => {
// 	const [coordinates, setCoordinates] = useState({});
// 	useEffect(() => {
// 		navigator.geolocation.getCurrentPosition(
// 			({ coords: { latitude, longitude } }) => {
// 				setCoordinates({ lat: latitude, lng: longitude });
// 			}
// 		);
// 	}, []);

// 	return { coordinates, setCoordinates };
// };
