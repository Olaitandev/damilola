# Video Background Resources

## 🎥 Current Video Setup

Your Hero component is configured to use video backgrounds. Currently using a free stock video from Coverr.

## 📁 Local Video Setup

To use your own videos, place them in this `/public/videos/` folder and update the Hero component:

```jsx
<source src="/videos/your-video.mp4" type="video/mp4" />
<source src="/videos/your-video.webm" type="video/webm" />
```

## 🆓 Free Stock Video Resources

### High-Quality Free Videos:

1. **Coverr** - https://coverr.co/

   - Free HD videos, no attribution required
   - Tech, coding, business themes available

2. **Pexels Videos** - https://www.pexels.com/videos/

   - Completely free, no attribution required
   - Great variety of tech/business content

3. **Unsplash Videos** - https://unsplash.com/videos

   - High-quality, free videos
   - Professional content

4. **Pixabay Videos** - https://pixabay.com/videos/
   - Free videos with various themes
   - No account required for download

### Recommended Video Themes for Your App:

- **Coding/Development**: Hands typing on keyboard, code on screen
- **Tech/Innovation**: Abstract tech animations, digital patterns
- **Business**: Modern office environments, teamwork
- **Abstract**: Geometric animations, particle systems

## 📐 Video Specifications

### Recommended Settings:

- **Resolution**: 1920x1080 (Full HD) minimum
- **Format**: MP4 (H.264) for best compatibility
- **Additional**: WebM for modern browsers
- **Duration**: 10-30 seconds (loops seamlessly)
- **File Size**: Under 5MB for good performance

### Optimization Tips:

- Compress videos to reduce load time
- Use tools like HandBrake for compression
- Consider multiple formats for browser compatibility

## 🎬 Custom Video Ideas

- Screen recording of your app in action
- Abstract coding animations
- Brand-specific content
- Product demonstrations

## 🔧 Technical Notes

- Videos autoplay muted (browser requirement)
- User can toggle sound with the control button
- Fallback gradient background if video fails to load
- Responsive design adapts to all screen sizes
