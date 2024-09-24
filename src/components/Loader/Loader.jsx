const loaderStyle = {
  position: 'fixed',
  top: '20%',
  left: '50%',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
};

const Loader = () => {
  return (
    <div style={loaderStyle}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {/* Кампер */}
        <rect
          x="20"
          y="80"
          width="160"
          height="80"
          rx="10"
          ry="10"
          fill="#ffc531"
        />
        <rect x="130" y="50" width="30" height="50" fill="#ffc531" />

        {/* Вікна */}
        <rect x="30" y="90" width="40" height="30" fill="white" />
        <rect x="80" y="90" width="40" height="30" fill="white" />

        {/* Колеса */}
        <circle cx="50" cy="160" r="20" fill="#2c3e50">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 160"
            to="360 50 160"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="150" cy="160" r="20" fill="#2c3e50">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 150 160"
            to="360 150 160"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Анімація руху */}
        <animateTransform
          attributeName="transform"
          type="translate"
          from="-50 0"
          to="250 0"
          dur="5s"
          repeatCount="indefinite"
        />
      </svg>
    </div>
  );
};
export default Loader;
