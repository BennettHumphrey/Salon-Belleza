const MapPin = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="inherit"
        height="inherit"
        viewBox="0 0 16 16"
      >
        <path
          fill="inherit"
          d="m7.385 15.293l-.192-.13a18 18 0 0 1-2.666-2.283C3.1 11.385 1.5 9.144 1.5 6.499C1.5 3.245 4.141 0 8 0s6.5 3.245 6.5 6.5c0 2.645-1.6 4.886-3.027 6.379a18 18 0 0 1-2.666 2.283q-.122.085-.192.13c-.203.135-.41.263-.615.393c-.205-.13-.412-.258-.615-.392M8 8.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
        ></path>
      </svg>
    </div>
  );
};
const Mail = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="inherit"
        height="inherit"
        viewBox="0 0 512 512"
      >
        <path
          fill="inherit"
          d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56m-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26"
        ></path>
      </svg>
    </div>
  );
};
const Phone = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="inherit"
        height="inherit"
        viewBox="0 0 24 24"
      >
        <path
          fill="inherit"
          d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"
        ></path>
      </svg>
    </div>
  );
};

export const contactInfoData = {
  header: "CONTACT INFO",
  description:
    "Salon Belleza is your hair salon. We welcome you with open arms!",
  info: [
    {
      icon: <MapPin/>,
      text: "123 Fake St. Victoria, BC",
    },
    {
      icon: <Mail/>,
      text: "bennetthumphrey98@gmail.com",
    },
    {
      icon: <Phone/>,
      text: "555-555-5555",
    },
  ],
};
