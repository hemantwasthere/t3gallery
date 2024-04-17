export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/e43c63a7-fc26-4ef3-a01e-6dacda23ecfe-1t7g7r.gif",
    "https://utfs.io/f/9d1fbb63-a78a-4423-a823-b2f274dafc05-jko8kz.gif",
    "https://utfs.io/f/2db8b737-1ef4-40d0-a27d-0f6838af1392-yn0v5l.jpeg",
    "https://utfs.io/f/bb8c5b0c-8d4a-4d1e-932e-26f53f58068d-1usuwk.gif",
    "https://utfs.io/f/f2de0993-282f-4c21-893c-de73dcec5b2e-1vbzu1.webp",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
