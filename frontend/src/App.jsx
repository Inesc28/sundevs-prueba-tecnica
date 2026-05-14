import { Container, Row, Spinner, Alert } from "react-bootstrap";
import { useVideos } from "./hooks/useVideos";
import { VideoCard } from "./components/VideoCard";

function App() {
  const { videos, loading, error } = useVideos();

  if (loading)
    return (
      <div
        className="d-flex align-items-center justify-content-center vh-100"
        style={{ backgroundColor: "#000" }}
      >
        <Spinner style={{ color: "#ff0000" }} />
      </div>
    );

  if (error)
    return (
      <div
        className="vh-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#000" }}
      >
        <Alert
          variant="dark"
          style={{
            backgroundColor: "#111",
            color: "#ff0000",
            border: "1px solid #ff0000",
          }}
        >
          SYSTEM_ERROR: {error}
        </Alert>
      </div>
    );

  const crownJewel = videos.find((v) => v.isCrownJewel);
  const regularVideos = videos.filter((v) => !v.isCrownJewel);

  return (
    <div
      className="min-vh-100 pb-5"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <Container className="py-5">
        <header className="mb-5 d-flex justify-content-between align-items-end border-bottom border-secondary pb-3">
          <div>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "900",
                letterSpacing: "4px",
                margin: "0",
                color: "#fff",
              }}
            >
              V<span style={{ color: "#ff0000" }}>I</span>DEO
              <span style={{ color: "#7e22ce" }}>.</span>LAB
            </h1>
          </div>
          <p
            style={{
              fontSize: "0.7rem",
              color: "#606060",
              margin: "0",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Discovery Feed / {new Date().getFullYear()}
          </p>
        </header>

        {crownJewel && (
          <div className="mb-5">
            <Row>
              <VideoCard video={crownJewel} isFeatured={true} />
            </Row>
          </div>
        )}

        <Row className="g-3">
          {regularVideos.map((video, idx) => (
            <VideoCard key={idx} video={video} isFeatured={false} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
