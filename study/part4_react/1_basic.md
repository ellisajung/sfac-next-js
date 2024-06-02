(https://bioub.github.io/dom-visualizer/)

# 가상 돔

- 리액트가 주체가 되어 가상 돔을 2개 만들어 메모리에 적재
- 이 중 하나만 변경 사항을 업데이트하고 나머지 하나와 비교 후 달라진 부분만 확인 (Diffing)
- 달라진 부분만 잘라서 오리지널 돔에 변경 처리 (Patch update)
