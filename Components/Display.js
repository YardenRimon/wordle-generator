export default function Display({ place }) {
  const { longitude, latitude } = place.location;
  console.log("display place", place);
  return (
    <iframe
      id="ifrMap"
      style={{ pointerEvents: "none" }}
      frameBorder="0"
      // scrolling="no"
      // marginHeight="0"
      // marginWidth="0"
      width="100%"
      height="35%"
      // min-height="200px"
      // max-height={"100%"}
      src={`https://www.govmap.gov.il/map.html?bb=0&zb=0&in=0&c=${longitude},${latitude}&z=10&b=1`}
    >
      {/* {" "} */}
    </iframe>
  );
}
