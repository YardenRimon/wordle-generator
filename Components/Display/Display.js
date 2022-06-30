export default function Display({ place }) {
  const { x, y } = place.location;

  return (
    <>
      <iframe
        id="ifrMap"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        width="100%"
        height="350px"
        src={`https://www.govmap.gov.il/map.html?bb=0&zb=0&in=0&c=${x},${y}&z=10&b=1`}
      >
        {" "}
      </iframe>
    </>
  );
}
