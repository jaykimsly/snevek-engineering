# Using Google Photos in Your Website

## Important Note About Google Photos URLs

The placeholder URLs I've added in the Gallery.jsx file are examples of what Google Photos URLs might look like. However, there are a few important things to know:

1. **Replace with Actual URLs**: You'll need to replace these placeholder URLs with the actual URLs of your company's photos from Google search results.

2. **How to Get Your Google Photos URLs**:
   - Search for your company on Google
   - Go to the "Photos" section or your Google Business Profile
   - Right-click on the images you want to use
   - Select "Copy image address" or "Copy image link"
   - Replace the placeholder URLs in the Gallery.jsx file with these actual URLs

3. **Permission and Copyright**:
   - Make sure you have the rights to use these images on your website
   - If these are photos you've uploaded to your Google Business Profile, you should own the rights
   - If they're photos taken by others, you may need permission to use them

4. **Image Stability**:
   - Google image URLs may change over time or expire
   - For a more stable solution, consider downloading the images and hosting them directly on your server or using a dedicated image hosting service

5. **Image Optimization**:
   - The images should be optimized for web use (compressed, proper dimensions)
   - Consider using responsive image techniques for better performance

## Alternative Approach

If you encounter issues with Google Photos URLs, consider:

1. Downloading the images from your Google Business Profile
2. Optimizing them for web use (using tools like TinyPNG or Squoosh)
3. Storing them in your project's public folder (e.g., `/public/images/`)
4. Referencing them with relative paths in your code:

```jsx
image: "/images/your-image-name.jpg"
```

This approach gives you more control over your images and ensures they won't suddenly become unavailable if Google changes their URL structure.