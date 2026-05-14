import { Card, Badge, Col } from "react-bootstrap";

export const VideoCard = ({ video, isFeatured }) => {
  const { title, author, thumbnail, relativeDate, hypeScore } = video;

  return (
    <Col
      xs={12}
      md={isFeatured ? 12 : 6}
      lg={isFeatured ? 12 : 4}
      className="mb-4"
    >
      <Card
        className="w-100 border-0 overflow-hidden transition-hover"
        style={{
          backgroundColor: "#0a0a0a",
          borderRadius: "0px",
          borderLeft: isFeatured ? "4px solid #ff0000" : "none",
        }}
      >
        <div className={isFeatured ? "d-md-flex" : ""}>
          <div
            style={{ position: "relative", width: isFeatured ? "60%" : "100%" }}
          >
            <Card.Img
              src={thumbnail}
              alt={title}
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/600x400/000000/ffffff?text=Video+Unavailable";
              }}
              style={{
                width: "100%",
                height: isFeatured ? "400px" : "200px",
                objectFit: "cover",
                filter: "grayscale(20%)",
              }}
            />
            {isFeatured && (
              <Badge
                className="position-absolute bottom-0 start-0 m-3 px-3 py-2"
                style={{
                  backgroundColor: "#ff0000",
                  borderRadius: "0",
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                }}
              >
                TRENDING NOW
              </Badge>
            )}
          </div>

          <Card.Body
            className="p-4 d-flex flex-column justify-content-center"
            style={{ backgroundColor: isFeatured ? "#121212" : "transparent" }}
          >
            <Card.Title
              className={`text-white fw-bold mb-3 ${isFeatured ? "display-6" : "h5"}`}
              style={{ letterSpacing: "-0.5px", lineHeight: "1.2" }}
            >
              {title}
            </Card.Title>

            <Card.Text style={{ color: "#a0a0a0", fontSize: "0.9rem" }}>
              {author}
            </Card.Text>

            <div className="mt-4 d-flex align-items-center gap-3">
              <span
                style={{
                  color: "#606060",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                }}
              >
                {relativeDate}
              </span>
              <div
                style={{
                  width: "1px",
                  height: "12px",
                  backgroundColor: "#333",
                }}
              ></div>
              <span
                style={{
                  color: "#7e22ce",
                  fontSize: "0.75rem",
                  fontWeight: "800",
                }}
              >
                SCORE {hypeScore.toFixed(2)}
              </span>
            </div>
          </Card.Body>
        </div>
      </Card>

      <style>{`
        .transition-hover { transition: all 0.2s ease-in-out; cursor: pointer; }
        .transition-hover:hover { background-color: #1a1a1a !important; }
        .transition-hover:hover img { filter: grayscale(0%); }
      `}</style>
    </Col>
  );
};
