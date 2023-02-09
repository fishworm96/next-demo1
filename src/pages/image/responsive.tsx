import Image from 'next/image'

const Responsive = () => (
  <div>
    <h1>Image Component With Layout Responsive</h1>
    {/* Image组件基本用法，width和height将会图片压缩到输入的指定像素，并根据不同窗口改变图片大小 */}
    <Image
      alt="Mountains"
      // 在public中的文件可以直接输入地址
      src="/mountains.jpg"
      width={700}
      height={475}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  </div>
)

export default Responsive
