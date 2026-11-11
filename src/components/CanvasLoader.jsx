import { Html, useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const CanvasLoader = () => {
    const { t } = useTranslation()
    const [progress, setProgress] = useState(() => useProgress.getState().progress)

    useEffect(() => {
        let frame = 0
        const update = ({ progress: nextProgress }) => {
            cancelAnimationFrame(frame)
            // Three's loader can report progress while another component renders.
            frame = requestAnimationFrame(() => setProgress(nextProgress))
        }
        const unsubscribe = useProgress.subscribe(update)
        update(useProgress.getState())
        return () => {
            unsubscribe()
            cancelAnimationFrame(frame)
        }
    }, [])
    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <span className="canvas-loader"/>
            <p role="status" style={{ fontSize: 14, color: '#f1f1f1', fontWeight: 800, marginTop: 40 }}>
                {t('canvasLoader.loading')} {progress > 0 && `${Math.round(progress)}%`}
            </p>
        </Html>
    )
}
export default CanvasLoader
