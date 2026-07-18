(() => {
  'use strict';

  const DEFAULT_BANNER = 'https://jujushmaterial.github.io/assets/images/experience/frame-logo.jpg?v=20260718-1';

  const timelineData = {
    handover: {
      date: '2026.07.01',
      title: '회장직 인수인계 및 운영체계 점검',
      summary: '전임 운영진으로부터 회장 업무와 주요 운영 자료를 인계받고, 2026학년도 2학기 운영을 위한 회칙·조직·재정·활동 기록 체계를 검토했습니다.',
      banner: '',
      sections: [
        {
          title: '활동 개요',
          paragraphs: [
            '회장직 인수인계 이후 기존 운영 자료와 회칙을 검토하고, 실제 동아리 운영 방식과 공식 규정 사이에 차이가 있는 부분을 정리했습니다.'
          ]
        },
        {
          title: '점검 목적',
          items: [
            '회장·부회장·총무와 집행부의 역할 및 의사결정 범위 확인',
            '회비·지원금·책임보증금 등 재정 운영 기준 검토',
            '총회·회의록·활동보고서 작성에 필요한 기록 체계 확인',
            '정기출사·전시·축제 등 2학기 주요 활동 운영 준비'
          ]
        },
        {
          title: '확인된 개선 과제',
          paragraphs: [
            '기존 회칙에는 임원진과 집행부의 개념이 혼재되어 있었고, 총회 절차와 재정·참여 기준이 실제 운영을 충분히 반영하지 못한 부분이 있었습니다. 이를 바탕으로 회칙 개정안을 준비하고 임시총회 안건을 구조화했습니다.'
          ]
        },
        {
          title: '후속 조치',
          paragraphs: [
            '운영체계 점검 결과를 바탕으로 2026년 7월 10일 회칙 개정 임시총회를 개최하고, 조직·총회·재정·참여 관련 조항을 제3차 개정안에 반영했습니다.'
          ]
        }
      ],
      resources: []
    },
    bylaws: {
      date: '2026.07.10',
      title: '회칙 개정 임시총회',
      summary: '기존 회칙과 실제 운영 방식 사이의 불일치를 해소하고, 역할·참여·의사결정·재정 관리 기준이 명확한 운영체계를 구축하기 위해 온라인 임시총회를 진행했습니다.',
      banner: '',
      sections: [
        {
          title: '개최 배경',
          paragraphs: [
            '2026학년도 2학기 운영 준비 과정에서 기존 회칙을 검토한 결과, 조직 구조와 총회 절차, 집행부 참여 기준, 재정 및 결산 조항이 실제 운영을 충분히 반영하지 못하는 문제가 확인됐습니다.'
          ]
        },
        {
          title: '개정 이유',
          items: [
            '임원진과 집행부의 역할 및 의사결정 권한이 불명확했음',
            '집행부 인원과 부서가 고정되어 학기별 운영 규모에 대응하기 어려웠음',
            '총회 공지·투표·의결·결과 공개 절차가 구체적으로 규정되지 않았음',
            '집행부의 실질적인 업무 참여를 판단할 기준이 없었음',
            '책임보증금과 우수 활동자 보상 제도의 근거가 없었음',
            '회비 외 수입과 회계·결산 공개 기준이 부족했음',
            '정기출사와 전시 등 실제 핵심 활동이 회칙에 충분히 반영되지 않았음'
          ]
        },
        {
          title: '진행 방식',
          items: [
            '기존 회칙 전체 검토 및 문제 조항 정리',
            '개정 표시본과 안건별 설명자료 작성',
            'Google Meet를 활용한 온라인 임시총회 진행',
            '전체 단체 채팅방에서 안건별 실시간 투표 실시',
            '의결 결과 확인 후 제3차 개정 회칙 최종본 작성 및 배포'
          ]
        },
        {
          title: '주요 개정 내용',
          items: [
            '임원진과 집행부의 역할 및 권한 구분',
            '학기별 규모에 대응하는 유연한 집행부 구성',
            '총회 사전 공지, 실시간 투표, 과반수 의결 및 결과 공개 절차',
            '집행부 업무 참여를 위한 책임보증금 제도',
            '우수 집행부와 일반 부원 보상 근거',
            '회비·책임보증금·지원금·행사 참가비 등 재정 관리 기준',
            '회의록·증빙자료·결산보고 및 회원 열람 절차',
            '회원 보호를 위한 제명 사유와 소명 절차'
          ]
        },
        {
          title: '결과',
          paragraphs: [
            '상정된 모든 회칙 개정 안건이 가결됐으며, 의결 결과를 반영한 제3차 개정 회칙을 작성해 전체 회원에게 공지했습니다. 제3차 개정일은 2026년 7월 10일로 기록했습니다.'
          ]
        }
      ],
      resources: [
        {
          label: '열람용 회칙',
          href: 'documents/frame-bylaws-public-2026-07-10.html'
        }
      ]
    }
  };

  const modal = document.getElementById('timeline-modal');
  const dialog = modal?.querySelector('.timeline-modal__dialog');
  const banner = document.getElementById('modal-banner');
  const date = document.getElementById('modal-date');
  const title = document.getElementById('modal-title');
  const summary = document.getElementById('modal-summary');
  const sections = document.getElementById('modal-sections');
  const resources = document.getElementById('modal-resources');
  let lastTrigger = null;

  if (!modal || !dialog || !banner || !date || !title || !summary || !sections || !resources) {
    return;
  }

  const bannerShell = banner.parentElement;
  banner.addEventListener('load', () => {
    banner.hidden = false;
    bannerShell?.classList.remove('is-fallback');
  });
  banner.addEventListener('error', () => {
    banner.hidden = true;
    bannerShell?.classList.add('is-fallback');
  });

  const createSection = (section) => {
    const wrapper = document.createElement('section');
    wrapper.className = 'modal-section';

    const heading = document.createElement('h3');
    heading.textContent = section.title;
    wrapper.appendChild(heading);

    (section.paragraphs || []).forEach((text) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      wrapper.appendChild(paragraph);
    });

    if (section.items?.length) {
      const list = document.createElement('ul');
      section.items.forEach((text) => {
        const item = document.createElement('li');
        item.textContent = text;
        list.appendChild(item);
      });
      wrapper.appendChild(list);
    }

    return wrapper;
  };

  const openModal = (id, trigger) => {
    const item = timelineData[id];
    if (!item) return;

    lastTrigger = trigger;
    banner.hidden = false;
    bannerShell?.classList.remove('is-fallback');
    banner.src = item.banner || DEFAULT_BANNER;
    banner.alt = `${item.title} banner`;
    date.textContent = item.date;
    title.textContent = item.title;
    summary.textContent = item.summary;
    sections.replaceChildren(...item.sections.map(createSection));

    const links = item.resources.map((resource) => {
      const link = document.createElement('a');
      link.href = resource.href;
      link.textContent = resource.label;
      link.target = '_blank';
      link.rel = 'noopener';
      return link;
    });
    resources.replaceChildren(...links);
    resources.hidden = links.length === 0;

    modal.hidden = false;
    document.body.classList.add('modal-open');
    dialog.focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    lastTrigger?.focus();
  };

  document.querySelectorAll('[data-timeline-id]').forEach((button) => {
    button.addEventListener('click', () => openModal(button.dataset.timelineId, button));
  });

  modal.querySelectorAll('[data-modal-close]').forEach((element) => {
    element.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });
})();