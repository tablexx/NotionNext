import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Power by NotionNext</span>
      <a
        href='https://github.com/tangly1024/NotionNext'
        className='underline justify-start'>
        © 2025 华夏神明降临家族 {/*siteConfig('VERSION')*/}
      </a>
      .
    </div>
  )
}
