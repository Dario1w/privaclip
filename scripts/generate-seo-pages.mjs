import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const site = 'https://privaclip.com';
const navItems = [
  ['Tools', '/tools/'],
  ['MOV to MP4', '/mov-to-mp4/'],
  ['MP4 to MP3', '/mp4-to-mp3/'],
  ['Privacy', '/privacy/']
];

const pages = [
  {
    path: 'mov-to-mp4',
    title: 'MOV to MP4 Converter - Private, Free, No Upload',
    description: 'Convert MOV to MP4 directly in your browser. PrivaClip processes your video locally with no uploads, no account, and no watermark.',
    h1: 'MOV to MP4 Converter',
    intro: 'Convert MOV to MP4 directly in your browser without uploading your video. PrivaClip keeps the file on your device and creates an MP4 that is easier to share, upload, and play across phones, computers, browsers, and editing tools.',
    why: 'MOV files are common on iPhone, macOS, and QuickTime workflows. MP4 is usually the safer choice when you need broad compatibility across Android, Windows, websites, messaging apps, and social platforms. Converting MOV to MP4 helps reduce playback issues while keeping the workflow simple.',
    steps: ['Drop your MOV file into PrivaClip.', 'Keep MP4 selected as the output format.', 'Adjust quality, resolution, trim, or aspect ratio if needed.', 'Convert locally in your browser.', 'Download the finished MP4 file.'],
    faqs: [
      ['Is MOV to MP4 conversion private?', 'Yes. PrivaClip processes the file locally in your browser.'],
      ['Will the MP4 work on more devices?', 'In most cases, yes. MP4 is one of the most widely supported video formats.'],
      ['Does PrivaClip add a watermark?', 'No. The converted video is downloaded without a PrivaClip watermark.']
    ],
    related: ['webm-to-mp4', 'mp4-to-mp3', 'video-to-gif', 'compress-video']
  },
  {
    path: 'webm-to-mp4',
    title: 'WebM to MP4 Converter - Private Browser Tool',
    description: 'Convert WebM to MP4 in your browser without uploading your video. Free, private, and watermark-free.',
    h1: 'WebM to MP4 Converter',
    intro: 'Convert WebM to MP4 in your browser with no upload required. PrivaClip is useful when you have a WebM recording or web video that needs to work in apps, devices, or platforms that prefer MP4.',
    why: 'WebM is efficient for browser-based video, but MP4 is usually more compatible with editing software, mobile devices, messaging apps, and social platforms. If a WebM file will not upload, preview, or play correctly, converting it to MP4 is often the simplest fix.',
    steps: ['Add your WebM file.', 'Choose MP4 as the output format.', 'Pick quality and optional resize settings.', 'Convert the file locally.', 'Save the MP4 to your device.'],
    faqs: [
      ['Does the WebM file get uploaded?', 'No. It stays in your browser during conversion.'],
      ['Can I resize WebM while converting to MP4?', 'Yes. Use the resolution and aspect ratio options in the converter.'],
      ['Is an account required?', 'No. PrivaClip does not require sign-up.']
    ],
    related: ['mov-to-mp4', 'avi-to-mp4', 'mp4-to-webm', 'compress-video']
  },
  {
    path: 'avi-to-mp4',
    title: 'AVI to MP4 Converter - Free and Private',
    description: 'Convert AVI videos to MP4 locally in your browser. No uploads, no account, and no watermark.',
    h1: 'AVI to MP4 Converter',
    intro: 'Convert AVI to MP4 directly in your browser. PrivaClip helps turn older AVI files into a more practical MP4 format without sending your video to a cloud conversion server.',
    why: 'AVI is an older container format that can cause playback and upload problems on modern devices and platforms. MP4 is easier to share, preview, edit, and upload. Converting AVI to MP4 is often the best way to make an older video usable again.',
    steps: ['Select your AVI file.', 'Choose MP4 as the output format.', 'Adjust quality or resolution if needed.', 'Run the browser-based conversion.', 'Download your MP4 file.'],
    faqs: [
      ['Is AVI still supported?', 'PrivaClip accepts common AVI files, although codec support can vary by browser and FFmpeg.wasm.'],
      ['Will AVI to MP4 reduce quality?', 'It can, depending on the quality setting. Use High Quality when preserving detail matters.'],
      ['Does PrivaClip upload AVI files?', 'No. The conversion runs locally in your browser.']
    ],
    related: ['mov-to-mp4', 'webm-to-mp4', 'mkv-to-mp4', 'resize-video']
  },
  {
    path: 'mkv-to-mp4',
    title: 'MKV to MP4 Converter - No Upload Required',
    description: 'Convert MKV to MP4 with private browser-based processing. Your video stays on your device.',
    h1: 'MKV to MP4 Converter',
    intro: 'Convert MKV to MP4 in your browser for easier playback, sharing, and uploading. PrivaClip processes the file locally so your video does not need to leave your device.',
    why: 'MKV is flexible, but many apps and upload forms prefer MP4. Converting MKV to MP4 can make a video easier to use on phones, web players, editing tools, and social platforms.',
    steps: ['Add your MKV file.', 'Select MP4 output.', 'Choose quality and optional resolution settings.', 'Convert locally in the browser.', 'Download your MP4.'],
    faqs: [
      ['Can all MKV files be converted?', 'Many common MKV files work, but codec support can vary. If a file fails, try a smaller file or different settings.'],
      ['Is MKV to MP4 private?', 'Yes. PrivaClip processes selected media locally in the browser.'],
      ['Do I need to install software?', 'No. PrivaClip runs in a modern browser.']
    ],
    related: ['avi-to-mp4', 'webm-to-mp4', 'compress-video', 'trim-video']
  },
  {
    path: 'mp4-to-webm',
    title: 'MP4 to WebM Converter - Private Browser Tool',
    description: 'Convert MP4 to WebM directly in your browser. Free, private, no account, and no upload required.',
    h1: 'MP4 to WebM Converter',
    intro: 'Convert MP4 to WebM in your browser when you need a web-friendly video format. PrivaClip keeps conversion local and avoids cloud uploads.',
    why: 'WebM is a strong choice for browser video and web publishing. It can be useful for sites, demos, and workflows where open web video matters.',
    steps: ['Choose your MP4 file.', 'Select WebM output.', 'Adjust quality if needed.', 'Convert locally.', 'Download the WebM file.'],
    faqs: [
      ['Why convert MP4 to WebM?', 'WebM is useful for web-first playback and open browser video workflows.'],
      ['Is the file uploaded?', 'No. PrivaClip converts locally in your browser.'],
      ['Can I compress during conversion?', 'Yes. Use the quality controls to reduce file size.']
    ],
    related: ['webm-to-mp4', 'compress-video', 'resize-video', 'video-to-gif']
  },
  {
    path: 'mp4-to-mp3',
    title: 'MP4 to MP3 Converter - Extract Audio Privately',
    description: 'Extract MP3 audio from MP4 videos directly in your browser. No uploads, no sign-up, no watermark.',
    h1: 'MP4 to MP3 Converter',
    intro: 'Extract MP3 audio from an MP4 video directly in your browser. PrivaClip lets you turn videos into audio files without uploading them to a server.',
    why: 'MP3 is useful when you only need the audio from a lecture, screen recording, voice note, podcast clip, interview, or music video. Instead of sharing the full video file, you can create a smaller audio-only file that is easier to store and play.',
    steps: ['Select your MP4 video.', 'Choose MP3 as the output format.', 'Select your preferred quality.', 'Extract the audio locally in your browser.', 'Download the MP3 file.'],
    faqs: [
      ['Can PrivaClip extract audio from MP4?', 'Yes. Choose MP3 as the output format.'],
      ['Is the video uploaded?', 'No. The extraction happens locally in your browser.'],
      ['Will the MP3 include video?', 'No. MP3 is audio-only.']
    ],
    related: ['mov-to-mp3', 'extract-audio-from-video', 'video-to-gif', 'trim-video']
  },
  {
    path: 'mov-to-mp3',
    title: 'MOV to MP3 Converter - Extract Audio With No Upload',
    description: 'Extract MP3 audio from MOV files directly in your browser. Private, free, and no account required.',
    h1: 'MOV to MP3 Converter',
    intro: 'Extract MP3 audio from MOV videos without uploading the file to a server. PrivaClip runs the conversion in your browser and saves the MP3 back to your device.',
    why: 'MOV files often come from iPhones, cameras, and QuickTime. If you only need the audio from a recording, converting MOV to MP3 creates a smaller file that is easier to share and play.',
    steps: ['Add your MOV file.', 'Select MP3 output.', 'Choose audio quality.', 'Extract locally in the browser.', 'Download your MP3.'],
    faqs: [
      ['Can I extract audio from iPhone videos?', 'Yes, if the browser can read the file and the codec is supported.'],
      ['Does PrivaClip upload MOV files?', 'No. Conversion runs locally in your browser.'],
      ['Is MOV to MP3 free?', 'Yes. PrivaClip is free to use.']
    ],
    related: ['mp4-to-mp3', 'mov-to-mp4', 'extract-audio-from-video', 'trim-video']
  },
  {
    path: 'video-to-gif',
    title: 'Video to GIF Converter - Private, Free, No Upload',
    description: 'Create an animated GIF from a video in your browser. PrivaClip keeps your file local and adds no watermark.',
    h1: 'Video to GIF Converter',
    intro: 'Create an animated GIF from a video directly in your browser. PrivaClip converts locally, so your video does not need to be uploaded before the GIF is created.',
    why: 'GIFs are useful for short loops, quick reactions, previews, tutorials, product moments, and lightweight visual sharing. For best results, use a short clip and trim the video before converting.',
    steps: ['Add your video file.', 'Choose GIF as the output format.', 'Trim the clip if needed.', 'Convert the video locally.', 'Download the animated GIF.'],
    faqs: [
      ['Should GIF clips be short?', 'Yes. Short clips usually create better GIFs and smaller files.'],
      ['Does PrivaClip watermark GIFs?', 'No. The GIF is exported without a PrivaClip watermark.'],
      ['Can I make a GIF without uploading my video?', 'Yes. PrivaClip processes the file in your browser.']
    ],
    related: ['trim-video', 'compress-video', 'mov-to-mp4', 'webm-to-mp4']
  },
  {
    path: 'compress-video',
    title: 'Compress Video Online - Private, No Upload',
    description: 'Compress videos directly in your browser with adjustable quality and resolution. No upload required.',
    h1: 'Compress Video Online',
    intro: 'Compress a video directly in your browser by adjusting quality, resolution, and output format. PrivaClip is built for private video compression with no upload required.',
    why: 'Large videos can be difficult to send, upload, store, or share. Compression can reduce file size by lowering bitrate, changing resolution, or exporting to a more practical format. PrivaClip gives you simple controls so you can choose between smaller files and higher visual quality.',
    steps: ['Add your video file.', 'Choose MP4 or WebM as the output format.', 'Select Compact, Balanced, or High Quality.', 'Optionally reduce the resolution.', 'Convert and download the compressed video.'],
    faqs: [
      ['Will compression reduce quality?', 'Usually, yes. Smaller files often require some quality tradeoff.'],
      ['Can I keep high quality?', 'Yes. Use the High Quality preset or keep the original resolution.'],
      ['Is the video uploaded for compression?', 'No. Compression runs locally in your browser.']
    ],
    related: ['resize-video', 'trim-video', 'mov-to-mp4', 'webm-to-mp4']
  },
  {
    path: 'trim-video',
    title: 'Trim Video Online - Private Browser Trimmer',
    description: 'Trim a video locally in your browser. Cut start and end times without uploading your file.',
    h1: 'Trim Video Online',
    intro: 'Trim a video in your browser by setting start and end times before conversion. PrivaClip keeps the workflow private and avoids uploading the source file.',
    why: 'Trimming helps remove dead air, mistakes, countdowns, and extra footage before you share or upload a video. It can also make compression faster by reducing the length of the clip.',
    steps: ['Add your video.', 'Open More options.', 'Set the start and end times.', 'Choose the output format.', 'Convert and download the trimmed file.'],
    faqs: [
      ['Can I trim without uploading?', 'Yes. Trimming runs locally in your browser.'],
      ['Can I trim and convert at the same time?', 'Yes. Set the trim values and choose your output format before converting.'],
      ['Does trimming change quality?', 'The output quality depends on the selected conversion settings.']
    ],
    related: ['video-to-gif', 'compress-video', 'mute-video', 'resize-video']
  },
  {
    path: 'mute-video',
    title: 'Mute Video Online - Remove Audio Privately',
    description: 'Remove audio from a video directly in your browser. Free, private, and no upload required.',
    h1: 'Mute Video Online',
    intro: 'Remove the audio track from a video directly in your browser. PrivaClip is useful when you need a silent clip for demos, social posts, presentations, or background video.',
    why: 'Muting a video can protect private conversations, remove background noise, or prepare a clip for captions and voiceover. PrivaClip lets you remove audio while keeping the file on your device.',
    steps: ['Add your video file.', 'Open More options.', 'Select Remove audio track.', 'Choose your output format.', 'Convert and download the muted video.'],
    faqs: [
      ['Can I remove audio without uploading?', 'Yes. The video is processed locally in your browser.'],
      ['Will the output video be silent?', 'Yes. Selecting remove audio exports the video without an audio track.'],
      ['Can I also resize the video?', 'Yes. You can combine mute, resize, and format settings.']
    ],
    related: ['trim-video', 'resize-video', 'compress-video', 'mov-to-mp4']
  },
  {
    path: 'resize-video',
    title: 'Resize Video Online - Change Resolution Privately',
    description: 'Resize videos in your browser and export MP4, WebM, MOV, AVI, GIF, or MP3. No server upload required.',
    h1: 'Resize Video Online',
    intro: 'Resize a video directly in your browser by choosing a smaller resolution or changing aspect ratio. PrivaClip processes the file locally, so your video stays on your device.',
    why: 'Resizing can make videos easier to upload, faster to share, and better suited for specific platforms. You can keep the original format or convert to a more compatible output like MP4.',
    steps: ['Add your video.', 'Open More options.', 'Choose a resolution or aspect ratio.', 'Select the output format.', 'Convert and download the resized video.'],
    faqs: [
      ['Can I resize to vertical video?', 'Yes. Use the 9:16 aspect ratio option for vertical output.'],
      ['Will resizing reduce file size?', 'Often, yes, especially when reducing resolution.'],
      ['Is resizing private?', 'Yes. PrivaClip processes the file in your browser.']
    ],
    related: ['convert-video-to-9-16', 'compress-video', 'trim-video', 'mute-video']
  },
  {
    path: 'convert-video-to-9-16',
    title: 'Convert Video to 9:16 - Private Vertical Video Tool',
    description: 'Convert videos to 9:16 vertical format for Shorts, Reels, and TikTok without uploading your file.',
    h1: 'Convert Video to 9:16',
    intro: 'Convert a video to 9:16 vertical format directly in your browser. PrivaClip helps prepare clips for Shorts, Reels, TikTok, and mobile-first viewing without uploading your media file.',
    why: 'Vertical 9:16 video is the standard format for many mobile social platforms. Converting to 9:16 can make landscape or square clips fit better in vertical feeds.',
    steps: ['Add your video file.', 'Open More options.', 'Choose the 9:16 aspect ratio.', 'Select your output format and quality.', 'Convert and download the vertical video.'],
    faqs: [
      ['What is 9:16 video?', '9:16 is a vertical aspect ratio commonly used for mobile social video.'],
      ['Will the video be cropped?', 'Changing aspect ratio can crop the video to fit the selected frame. Preview your source before converting.'],
      ['Does PrivaClip upload the video?', 'No. The conversion runs locally in your browser.']
    ],
    related: ['resize-video', 'compress-video', 'trim-video', 'video-to-gif']
  },
  {
    path: 'extract-audio-from-video',
    title: 'Extract Audio from Video - Private MP3 Converter',
    description: 'Extract audio from video files in your browser and save as MP3. No upload, no account, and no watermark.',
    h1: 'Extract Audio from Video',
    intro: 'Extract audio from a video file and save it as MP3 directly in your browser. PrivaClip keeps your media local while creating an audio-only file.',
    why: 'Audio extraction is useful for interviews, lectures, voice notes, webinars, screen recordings, and clips where the sound matters more than the video. MP3 makes the result smaller and easier to play.',
    steps: ['Choose a video file.', 'Select MP3 output.', 'Choose audio quality.', 'Convert locally in your browser.', 'Download the MP3.'],
    faqs: [
      ['What output format is used for audio extraction?', 'Use MP3 for audio-only export.'],
      ['Is extraction private?', 'Yes. The file is processed locally in your browser.'],
      ['Can I trim before extracting audio?', 'Yes. Set trim start and end times before converting.']
    ],
    related: ['mp4-to-mp3', 'mov-to-mp3', 'trim-video', 'compress-video']
  }
];

const toolHub = {
  path: 'tools',
  title: 'Video Converter Tools - PrivaClip',
  description: 'Browse PrivaClip tools for private browser-based video conversion, audio extraction, GIF creation, trimming, muting, resizing, and compression.',
  h1: 'Video Converter Tools',
  intro: 'Browse PrivaClip tools for common private video conversion tasks. Each page targets a specific job and links back to the browser converter so you can process files without a required media upload.'
};

const corePages = [
  {
    path: 'privacy',
    title: 'Privacy - PrivaClip',
    description: 'Learn how PrivaClip handles video files with private browser-based conversion and no required media uploads.',
    h1: 'Privacy',
    intro: 'PrivaClip is designed so media conversion happens in your browser. When you select a file, the file is loaded into browser memory on your device and processed locally using browser-based technology.',
    sections: [
      ['Local processing', 'PrivaClip is designed so selected video and audio files are processed in your browser instead of being uploaded to a PrivaClip conversion server. The working file is handled in the active browser session while conversion runs.'],
      ['Third-party code', 'PrivaClip loads browser conversion assets from a CDN, including FFmpeg.wasm related files. Loading the conversion engine is separate from uploading your selected media file.'],
      ['Session data', 'Refreshing or closing the tab clears the current conversion workflow. Downloaded files are saved only where your browser saves them on your device.'],
      ['Analytics, ads, and cookies', 'PrivaClip should not collect file names, file contents, or private media metadata. If analytics or advertising scripts are added, this page should be updated to describe them clearly.']
    ]
  },
  {
    path: 'about',
    title: 'About PrivaClip - Private Browser Video Converter',
    description: 'PrivaClip is a private browser-based video converter for common media tasks like MOV to MP4, MP4 to MP3, video to GIF, and compression.',
    h1: 'About PrivaClip',
    intro: 'PrivaClip is a private browser-based video converter for common media tasks like converting MOV to MP4, WebM to MP4, MP4 to MP3, video to GIF, and compressing videos.',
    sections: [
      ['Why it exists', 'The tool is built for people who want the convenience of an online converter without sending private media files to a cloud conversion service.'],
      ['Technology', 'PrivaClip uses WebAssembly and FFmpeg.wasm to run media processing inside modern browsers.'],
      ['Limitations', 'Speed and file size support depend on your browser, memory, CPU, and selected settings. Some files may fail if the source codec is not supported.'],
      ['Best use cases', 'PrivaClip is useful for personal videos, screen recordings, small client clips, lessons, demos, social clips, and quick format changes.']
    ]
  },
  {
    path: 'contact',
    title: 'Contact PrivaClip',
    description: 'Contact PrivaClip for support, bug reports, privacy questions, and product feedback.',
    h1: 'Contact PrivaClip',
    intro: 'Need help with PrivaClip, want to report a bug, or have a privacy question? Use the contact details below and include enough context to reproduce the issue.',
    sections: [
      ['Support and issues', 'Use the GitHub repository at https://github.com/Dario1w/privaclip for technical issues and product feedback. A dedicated support email can be added here once the mailbox for privaclip.com is configured.'],
      ['Bug reports', 'Include your browser, device, input format, output format, approximate file size, and the error message if one appeared. Do not send private media unless support explicitly asks for a safe sample file.'],
      ['Privacy questions', 'For privacy-related questions, explain what you are trying to verify and which page or feature you are asking about.']
    ]
  },
  {
    path: 'terms',
    title: 'Terms - PrivaClip',
    description: 'Read the basic terms for using PrivaClip, including browser limitations, user responsibility, and conversion availability.',
    h1: 'Terms',
    intro: 'By using PrivaClip, you are responsible for the files you choose to process and for making sure you have the rights to convert them.',
    sections: [
      ['Use at your own risk', 'PrivaClip is provided as a browser-based utility. Conversion success is not guaranteed for every file, browser, codec, or device.'],
      ['Media rights', 'Only convert files that you own or have permission to process.'],
      ['Browser limitations', 'Large files can be slow or fail because conversion depends on browser memory, CPU, and selected settings.'],
      ['No professional guarantee', 'PrivaClip is not a backup, archive, compliance, or regulated data processing service. Keep your original files.']
    ]
  }
];

const labels = Object.fromEntries([...pages, ...corePages].map(p => [p.path, p.h1]));
labels[toolHub.path] = toolHub.h1;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

function layout(page, body, structuredData) {
  const canonical = `${site}/${page.path}/`;
  const json = JSON.stringify(structuredData || {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.h1,
    url: canonical,
    description: page.description
  }, null, 2);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(page.title)}</title>
<meta name="description" content="${escapeHtml(page.description)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${canonical}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:type" content="website">
<meta property="og:site_name" content="PrivaClip">
<meta property="og:title" content="${escapeHtml(page.title)}">
<meta property="og:description" content="${escapeHtml(page.description)}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${escapeHtml(page.title)}">
<meta name="twitter:description" content="${escapeHtml(page.description)}">
<script type="application/ld+json">${json}</script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#09090f;--surface:#111118;--surface2:#18181f;--border:#2a2a38;--border2:#35354a;--text:#e2e8f0;--muted:#8892a4;--primary:#a855f7;--accent:#06b6d4;--green:#34d399}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.65}
header,footer{border-color:var(--border);background:#111118}
header{background:linear-gradient(160deg,#13111f 0%,#111118 60%,#0e1a1f 100%);border-bottom:1px solid var(--border);padding:13px 28px;display:flex;align-items:center;gap:12px;position:sticky;top:0;z-index:50;backdrop-filter:blur(10px)}
.logo{display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit}
.logo-name{font-size:22px;font-weight:900;background:linear-gradient(135deg,var(--primary),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.logo-tag{font-size:9px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-top:-3px}
.main-nav{display:flex;align-items:center;gap:12px;margin-left:18px}
.main-nav a{color:var(--muted);text-decoration:none;font-size:13px;font-weight:750;padding:5px 0}
.main-nav a:hover{color:var(--text)}
.header-right{margin-left:auto;display:flex;gap:8px}
.hbadge{padding:4px 11px;border-radius:20px;font-size:11px;font-weight:700;display:flex;align-items:center;gap:5px}
.hbadge-green{background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.22);color:var(--green)}
.hbadge-purple{background:rgba(124,58,237,.1);border:1px solid rgba(124,58,237,.22);color:#c084fc}
footer a{color:var(--muted);text-decoration:none;font-size:13px}
footer a:hover{color:var(--primary)}
main{max-width:980px;margin:0 auto;padding:48px 20px}
.eyebrow{color:var(--green);font-size:12px;text-transform:uppercase;letter-spacing:.9px;font-weight:800;margin-bottom:10px}
h1{font-size:44px;line-height:1.06;letter-spacing:0;margin-bottom:14px}
h2{font-size:27px;line-height:1.2;letter-spacing:0;margin:34px 0 10px}
h3{font-size:17px;margin-bottom:6px}
p,li{color:var(--muted);font-size:15px}
.intro{max-width:760px;font-size:18px}
.panel{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:22px;margin-top:24px}
.cta{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.btn{display:inline-flex;align-items:center;justify-content:center;border-radius:9px;padding:12px 16px;text-decoration:none;font-weight:850;font-size:14px}
.primary{background:linear-gradient(135deg,#5b21b6,#7c3aed,var(--primary));color:white}
.secondary{background:var(--surface2);border:1px solid var(--border2);color:var(--text)}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px}
.card{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px}
ol,ul{padding-left:22px;margin-top:10px}
.links{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:12px}
.links a{color:var(--text);background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 12px;text-decoration:none;font-weight:800;font-size:13px}
.links a:hover{border-color:var(--primary);color:#c084fc}
details{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 16px;margin-top:8px}
summary{cursor:pointer;font-weight:850}
details p{margin-top:8px}
footer{border-top:1px solid var(--border);padding:28px 20px;color:var(--muted);font-size:13px}
.footer-inner{max-width:980px;margin:0 auto;display:grid;grid-template-columns:1fr auto 1fr;align-items:end;gap:16px}
.footer-center{text-align:center;grid-column:2}
.ft-name{font-size:20px;font-weight:900;background:linear-gradient(135deg,var(--primary),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:4px}
.footer-credit{grid-column:3;justify-self:end;text-align:right;font-size:11px;color:#5a6478;letter-spacing:.2px}
.footer-credit a{font-weight:800;color:var(--muted);text-decoration:none}
.footer-credit a:hover{color:var(--primary)}
@media(max-width:640px){h1{font-size:34px}.grid,.links{grid-template-columns:1fr}header{padding:12px 16px;align-items:flex-start;flex-wrap:wrap}.main-nav{order:3;width:100%;margin-left:0;gap:14px}.hbadge-purple{display:none}.header-right{margin-left:auto}.footer-inner{grid-template-columns:1fr;text-align:center}.footer-center,.footer-credit{grid-column:1;justify-self:center;text-align:center}}
</style>
</head>
<body>
<header>
  <a class="logo" href="/" aria-label="PrivaClip home">
    <svg width="30" height="30" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M36 4L68 22V50L36 68L4 50V22L36 4Z" fill="url(#logoGradient)" opacity="0.12"/>
      <path d="M36 8L64 24.5V47.5L36 64L8 47.5V24.5L36 8Z" stroke="url(#logoGradient)" stroke-width="1.5" fill="none"/>
      <rect x="10" y="26" width="3" height="5" rx="1" fill="url(#logoGradient)" opacity="0.6"/>
      <rect x="10" y="34" width="3" height="5" rx="1" fill="url(#logoGradient)" opacity="0.6"/>
      <rect x="10" y="42" width="3" height="5" rx="1" fill="url(#logoGradient)" opacity="0.6"/>
      <rect x="59" y="26" width="3" height="5" rx="1" fill="url(#logoGradient)" opacity="0.6"/>
      <rect x="59" y="34" width="3" height="5" rx="1" fill="url(#logoGradient)" opacity="0.6"/>
      <rect x="59" y="42" width="3" height="5" rx="1" fill="url(#logoGradient)" opacity="0.6"/>
      <polygon points="28,22 50,36 28,50" fill="url(#logoGradient)"/>
      <defs><linearGradient id="logoGradient" x1="4" y1="4" x2="68" y2="68" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#06b6d4"/>
      </linearGradient></defs>
    </svg>
    <div><div class="logo-name">PrivaClip</div><div class="logo-tag">Private Video Converter</div></div>
  </a>
  <nav class="main-nav" aria-label="Primary">
    ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('\n    ')}
  </nav>
  <div class="header-right">
    <div class="hbadge hbadge-purple">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M6 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"/></svg>
      Browser-native
    </div>
    <div class="hbadge hbadge-green">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M6 1L11 3.5V6.5C11 9 8.5 11 6 12 3.5 11 1 9 1 6.5V3.5L6 1Z"/></svg>
      Local processing
    </div>
  </div>
</header>
<main>${body}</main>
<footer>
  <div class="footer-inner">
    <div class="footer-center">
      <div class="ft-name">PrivaClip</div>
      <div><a href="/">Private Video Converter</a> · <a href="/tools/">Tools</a> · <a href="/privacy/">Privacy</a> · <a href="/about/">About</a> · <a href="/terms/">Terms</a></div>
      <div style="margin-top:4px">PrivaClip processes video in your browser with no required media upload.</div>
    </div>
    <div class="footer-credit">Tool made by <a href="https://dodi-studio.com" target="_blank" rel="noopener">DODI STUDIO</a></div>
  </div>
</footer>
</body>
</html>
`;
}

function converterPage(page) {
  const canonical = `${site}/${page.path}/`;
  const related = page.related.map(path => `<a href="/${path}/">${escapeHtml(labels[path] || path)}</a>`).join('');
  const faqHtml = page.faqs.map(([q, a]) => `<details><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`).join('');
  const steps = page.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: page.h1,
    url: canonical,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any modern browser',
    description: page.description,
    offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'}
  };
  const body = `
<section>
  <div class="eyebrow">Private browser conversion</div>
  <h1>${escapeHtml(page.h1)}</h1>
  <p class="intro">${escapeHtml(page.intro)}</p>
  <div class="cta">
    <a class="btn primary" href="/#converter">Open the converter</a>
    <a class="btn secondary" href="/privacy/">How privacy works</a>
  </div>
</section>
<section class="grid" aria-label="Benefits">
  <div class="card"><h3>No required upload</h3><p>Your selected media is processed locally in your browser.</p></div>
  <div class="card"><h3>No account</h3><p>Use the converter without sign-up, queues, or project setup.</p></div>
  <div class="card"><h3>No watermark</h3><p>Download a clean converted file after processing completes.</p></div>
</section>
<section class="panel">
  <h2>How to use this tool</h2>
  <ol>${steps}</ol>
</section>
<section>
  <h2>Why this conversion helps</h2>
  <p>${escapeHtml(page.why)}</p>
</section>
<section>
  <h2>Private local processing</h2>
  <p>PrivaClip is designed for people who want an online-style converter without sending private video files to a remote conversion server. The conversion engine runs in the browser, and performance depends on your device, browser, file size, and selected settings.</p>
</section>
<section>
  <h2>Related tools</h2>
  <div class="links">${related}<a href="/#converter">Private Video Converter</a><a href="/compress-video/">Compress Video</a></div>
</section>
<section>
  <h2>Frequently asked questions</h2>
  ${faqHtml}
</section>`;
  return layout(page, body, schema);
}

function toolsPage(page) {
  const moneyLinks = pages
    .filter(item => ['mov-to-mp4', 'webm-to-mp4', 'avi-to-mp4', 'mkv-to-mp4', 'mp4-to-webm', 'mp4-to-mp3', 'mov-to-mp3', 'video-to-gif'].includes(item.path))
    .map(item => `<a href="/${item.path}/">${escapeHtml(item.h1)}</a>`)
    .join('');
  const utilityLinks = pages
    .filter(item => ['compress-video', 'trim-video', 'mute-video', 'resize-video', 'convert-video-to-9-16', 'extract-audio-from-video'].includes(item.path))
    .map(item => `<a href="/${item.path}/">${escapeHtml(item.h1)}</a>`)
    .join('');
  const body = `
<section>
  <div class="eyebrow">Private conversion hub</div>
  <h1>${escapeHtml(page.h1)}</h1>
  <p class="intro">${escapeHtml(page.intro)}</p>
  <div class="cta">
    <a class="btn primary" href="/#converter">Open the converter</a>
    <a class="btn secondary" href="/privacy/">How privacy works</a>
  </div>
</section>
<section>
  <h2>Format converters</h2>
  <p>Use these pages when you know the exact source and output format you need.</p>
  <div class="links">${moneyLinks}</div>
</section>
<section>
  <h2>Video tools</h2>
  <p>Use these tools for compression, trimming, muting, resizing, vertical video, and audio extraction.</p>
  <div class="links">${utilityLinks}</div>
</section>
<section class="panel">
  <h2>Why these pages exist</h2>
  <p>Each tool page focuses on one conversion task. That makes PrivaClip easier to navigate, easier for search engines to understand, and more helpful for people who arrive with a specific job like converting MOV to MP4 or extracting MP3 audio from a video.</p>
</section>`;
  return layout(page, body, {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: page.h1,
    url: `${site}/${page.path}/`,
    description: page.description
  });
}

function corePage(page) {
  const sections = page.sections.map(([title, text]) => `<section><h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p></section>`).join('');
  const body = `
<section>
  <div class="eyebrow">PrivaClip</div>
  <h1>${escapeHtml(page.h1)}</h1>
  <p class="intro">${escapeHtml(page.intro)}</p>
  <div class="cta">
    <a class="btn primary" href="/#converter">Open the converter</a>
    <a class="btn secondary" href="/mov-to-mp4/">MOV to MP4</a>
  </div>
</section>
${sections}
<section>
  <h2>Popular tools</h2>
  <div class="links">
    <a href="/mov-to-mp4/">MOV to MP4 Converter</a>
    <a href="/webm-to-mp4/">WebM to MP4 Converter</a>
    <a href="/mp4-to-mp3/">MP4 to MP3 Converter</a>
    <a href="/video-to-gif/">Video to GIF Converter</a>
    <a href="/compress-video/">Compress Video</a>
    <a href="/trim-video/">Trim Video</a>
  </div>
</section>`;
  return layout(page, body);
}

function writePage(page, html) {
  const dir = join(root, page.path);
  mkdirSync(dir, {recursive: true});
  writeFileSync(join(dir, 'index.html'), html);
}

for (const page of pages) writePage(page, converterPage(page));
writePage(toolHub, toolsPage(toolHub));
for (const page of corePages) writePage(page, corePage(page));

const sitemapUrls = [''].concat([toolHub, ...pages, ...corePages].map(page => page.path));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(path => `  <url>
    <loc>${site}/${path ? `${path}/` : ''}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path ? '0.8' : '1.0'}</priority>
  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(root, 'sitemap.xml'), sitemap);
