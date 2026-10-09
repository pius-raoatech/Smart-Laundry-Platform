export const auditImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file provided' });
  }

  const base64Image = req.file.buffer.toString('base64');

  res.json({
    message: 'Image received and converted',
    originalName: req.file.originalname,
    mimeType: req.file.mimetype,
    sizeInBytes: req.file.size,
    base64Preview: base64Image.substring(0, 50) + '...',
  });
};
