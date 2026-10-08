"""Regenerates placeholder images. Not needed in production; replace the files with real photos."""
import os
from PIL import Image, ImageDraw, ImageFont
NAVY,GOLD,IVORY=(11,31,58),(197,163,90),(247,243,234)
def font(size):
    for p in ("/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf","/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"):
        if os.path.exists(p): return ImageFont.truetype(p,size)
    return ImageFont.load_default()
def make(path,w,h,label):
    im=Image.new("RGB",(w,h),NAVY);d=ImageDraw.Draw(im);m=max(16,min(w,h)//30)
    d.rectangle([m,m,w-m,h-m],outline=GOLD,width=max(2,m//8))
    s=max(14,min(w,h)//16)
    for i,(t,f,c) in enumerate([("HEIGHTVILLE ACADEMY",font(s),IVORY),("Image will be inserted here",font(int(s*.75)),GOLD),(label,font(int(s*.6)),(160,175,200))]):
        bb=d.textbbox((0,0),t,font=f);d.text(((w-bb[2])/2,h/2-s*1.2+i*s*1.3),t,font=f,fill=c)
    os.makedirs(os.path.dirname(path),exist_ok=True);im.save(path,quality=70,optimize=True)
G=[(1600,900),(1200,1600),(1200,1200),(1600,1200),(1200,1800),(1920,800),(1200,1200),(1200,1600),(1800,1200),(1600,900)]
base="public/images"
for i,(w,h) in enumerate(G,1): make(f"{base}/gallery/gallery-{i:02d}.jpg",w,h,f"gallery-{i:02d}.jpg  ·  {w}×{h}")
make(f"{base}/hero-placeholder.jpg",1920,1080,"hero-placeholder.jpg  ·  16:9")
for n,(w,h) in {"facilities/facility-01":(1200,900),"facilities/facility-02":(1200,900),"classroom/classroom-01":(1200,900),"classroom/classroom-02":(1200,900),"student-life/student-life-01":(1200,900),"student-life/student-life-02":(1200,900)}.items():
    make(f"{base}/{n}.jpg",w,h,n.split('/')[1]+".jpg")
# transparent logo placeholder (replace with the real logo, keep filename)
lg=Image.new("RGBA",(600,200),(0,0,0,0));d=ImageDraw.Draw(lg)
d.rectangle([4,4,596,196],fill=NAVY+(255,),outline=GOLD+(255,),width=3)
for t,y,s,c in [("HEIGHTVILLE",52,56,(197,163,90,255)),("ACADEMY",116,40,(247,243,234,255))]:
    f=font(s);bb=d.textbbox((0,0),t,font=f);d.text(((600-bb[2])/2,y),t,font=f,fill=c)
lg.save(f"{base}/logo-placeholder.png")
lg.resize((256,256)).save("app/icon.png")
